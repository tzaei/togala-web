import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

export default function ServiceCard({
  title,
  body,
  href,
  image,
  priority = false,
}: {
  title: string;
  body: string;
  href: string;
  image: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full overflow-hidden rounded-xl bg-white shadow-md shadow-ink/[0.06] ring-1 ring-ink/8 transition-[transform,box-shadow] duration-(--duration-glide) ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-lift hover:ring-clay/40 sm:flex-col"
    >
      <div className="relative w-[36%] shrink-0 overflow-hidden sm:aspect-[4/3] sm:w-auto">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={900}
          priority={priority}
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 50vw, 33vw"
          className="absolute inset-0 size-full object-cover transition-transform duration-(--duration-drift) ease-(--ease-out-soft) group-hover:scale-105 sm:static"
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-gradient-to-t from-ink/80 via-ink/30 to-transparent sm:block"
        />
        <h3 className="absolute inset-x-0 bottom-0 hidden px-5 pb-4 text-[0.95rem] leading-snug font-bold text-white sm:block">
          {title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:pt-4 sm:pb-5">
        <h3 className="text-[0.9rem] leading-snug font-bold text-ink sm:hidden">{title}</h3>
        <p className="mt-1.5 flex-1 text-[0.8rem] leading-[1.5] text-ink-700 sm:mt-0 sm:text-[0.84rem] sm:leading-[1.6]">
          {body}
        </p>
        <span className="mt-2.5 inline-flex sm:mt-4 items-center gap-2 text-[0.68rem] font-bold tracking-[0.18em] text-clay transition-colors duration-(--duration-swift) group-hover:text-clay-600">
          LEARN MORE
          <ArrowIcon className="size-3 transition-transform duration-(--duration-swift) group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
