#!/usr/bin/env node
/**
 * Postmark test-mode quota check.
 *
 * The account is capped at 100 sends for its LIFETIME while in test mode. When
 * it runs out, sending stops and contact-form enquiries silently stop arriving.
 * This reports how much is left and exits non-zero once it is worth acting on,
 * so it can be wired into a scheduled task.
 *
 *   node --env-file=.env.local scripts/check-postmark-quota.mjs
 *
 * Exit codes:  0 = fine   1 = getting close   2 = could not check
 */

const LIMIT = 100;
const WARN_AT = 70; // start nagging with 30 sends left

const token = process.env.POSTMARK_SERVER_TOKEN;
if (!token) {
  console.error("POSTMARK_SERVER_TOKEN is not set. Run with: node --env-file=.env.local");
  process.exit(2);
}

try {
  const res = await fetch("https://api.postmarkapp.com/messages/outbound?count=1&offset=0", {
    headers: { "X-Postmark-Server-Token": token, Accept: "application/json" },
  });
  if (!res.ok) {
    console.error(`Postmark returned ${res.status}. Token may have been rotated.`);
    process.exit(2);
  }

  const { TotalCount: sent } = await res.json();
  const left = LIMIT - sent;
  const bar = "█".repeat(Math.round(sent / 5)).padEnd(20, "░");

  console.log(`\n  Postmark test mode  ${bar}  ${sent}/${LIMIT}`);
  console.log(`  ${left} sends remaining\n`);

  if (sent >= WARN_AT) {
    console.log("  ⚠  Getting close. Request account approval in Postmark to remove");
    console.log("     the cap — it is free: postmarkapp.com → Request approval\n");
    process.exit(1);
  }
  console.log("  Nothing to do.\n");
} catch (err) {
  console.error("Could not reach Postmark:", err.message);
  process.exit(2);
}
