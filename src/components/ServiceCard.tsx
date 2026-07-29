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
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/10 transition-[transform,box-shadow] duration-(--duration-glide) ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-lift hover:ring-clay/50"
    >
      {/* Title sits on the image so the card reads as one block, not three */}
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={image}
          alt=""
          width={1200}
          height={900}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="size-full object-cover transition-transform duration-(--duration-drift) ease-(--ease-out-soft) group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent"
        />
        <h3 className="absolute inset-x-0 bottom-0 p-5 text-[1.05rem] leading-snug font-bold text-white">
          {title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="t-body flex-1 text-ink-700">{body}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.18em] text-clay">
          LEARN MORE
          <ArrowIcon className="size-3.5" />
        </span>
      </div>
    </Link>
  );
}
