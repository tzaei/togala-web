import Image from "next/image";
import CtaButton from "./CtaButton";

export default function CtaBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-ink">
      <Image
        src="/img/svc-construction-defect.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-20 object-cover brightness-[0.25] saturate-[0.3]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest/60 via-ink/40 to-forest/50" />
      <Image
        src="/img/togala-mark.png"
        alt=""
        aria-hidden
        width={512}
        height={512}
        className="pointer-events-none absolute top-1/2 left-1/2 -z-[5] size-56 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] sm:size-72"
      />
      <div className="flex flex-col items-center px-8 py-14 text-center sm:py-16">
        <p className="text-[0.6rem] font-bold tracking-[0.35em] text-clay sm:text-[0.68rem]">
          READY WHEN YOU ARE
        </p>
        <p className="display-eyebrow mt-4 text-[1.6rem] leading-[1] text-white sm:text-[2rem] lg:text-[2.4rem]">
          let&apos;s talk about your project.
        </p>
        <div aria-hidden className="mt-6 h-px w-16 bg-clay/50" />
        <div className="mt-6">
          <CtaButton href="/contact-us" size="lg">
            GET IN TOUCH
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
