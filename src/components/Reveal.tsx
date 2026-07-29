import type { ElementType, ReactNode } from "react";

/**
 * Layout wrapper. Formerly ran a staggered scroll-in animation — that was
 * removed because the delays made sections feel like they were loading late.
 *
 * It stays as a passthrough so callers keep their semantics (`as="li"` inside a
 * list, `className` for grid sizing) without every page needing to be rewritten.
 * `delay` is accepted and ignored so existing call sites still type-check.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  /** Ignored — kept so call sites don't all need editing. */
  delay?: number;
  className?: string;
}) {
  return <Tag className={className}>{children}</Tag>;
}
