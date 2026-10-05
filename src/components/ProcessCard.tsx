import { processIcons } from "./ProcessIcons";

export default function ProcessCard({
  index,
  step,
  title,
  body,
}: {
  index: number;
  step: string;
  title: string;
  body: string;
}) {
  const Icon = processIcons[index];
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 transition-[transform,box-shadow] duration-(--duration-glide) ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-lift sm:p-7">
      <span
        aria-hidden
        className="pointer-events-none absolute top-4 right-5 font-display text-[2.25rem] leading-none text-ink/[0.08] transition-colors duration-(--duration-glide) group-hover:text-clay/20 sm:text-[3.25rem]"
      >
        {step}
      </span>
      <div className="relative flex items-center gap-3 sm:block">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest/[0.07] sm:size-auto sm:rounded-none sm:bg-transparent">
          <Icon className="size-7 text-forest sm:size-10" />
        </span>
        <h3 className="text-[0.95rem] font-bold tracking-[0.16em] text-ink uppercase sm:mt-5 sm:text-[1.05rem]">
          {title}
        </h3>
      </div>
      <p className="relative mt-3 text-[0.875rem] leading-[1.6] text-ink-700 sm:mt-2 sm:text-[0.9375rem] sm:leading-[1.7]">
        {body}
      </p>
    </div>
  );
}
