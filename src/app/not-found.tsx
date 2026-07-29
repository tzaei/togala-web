import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell
      eyebrow="page not found"
      headline="THAT PAGE ISN'T HERE."
      intro="The link may be out of date, or the page may have moved during the site rebuild."
    >
      <section className="bg-bone">
        <div className="mx-auto max-w-[900px] px-6 py-20 text-center lg:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-clay px-8 py-3.5 text-sm font-bold tracking-[0.14em] text-white transition-colors duration-(--duration-swift) hover:bg-clay-600"
          >
            BACK TO HOME
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
