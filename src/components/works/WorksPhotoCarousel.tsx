import Image from "next/image";
import { workPhotos } from "@/data/content";

const half = Math.ceil(workPhotos.length / 2);
const rowTop = workPhotos.slice(0, half);
const rowBottom = workPhotos.slice(half);

type RowProps = {
  photos: string[];
  reverse?: boolean;
};

function CarouselRow({ photos, reverse }: RowProps) {
  // Duplicamos la lista para que el loop a -50% sea perfecto/sin saltos.
  const track = [...photos, ...photos];

  return (
    <div className="group overflow-hidden motion-reduce:overflow-x-auto">
      <ul
        className={`flex w-max gap-[2px] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } [animation-play-state:running] group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {track.map((src, i) => (
          <li
            key={`${src}-${i}`}
            className="relative h-44 w-64 shrink-0 overflow-hidden bg-bg-card md:h-52 md:w-72"
            aria-hidden={i >= photos.length}
          >
            <Image
              src={src}
              alt="Trabajo realizado por Insagas"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 256px, 288px"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WorksPhotoCarousel() {
  return (
    <div className="mt-12 flex flex-col gap-[2px]" aria-label="Galería de trabajos realizados">
      <CarouselRow photos={rowTop} />
      <CarouselRow photos={rowBottom} reverse />
    </div>
  );
}
