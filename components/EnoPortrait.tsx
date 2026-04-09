import Image from "next/image";
import { enoPortraitSrc } from "@/lib/site";

type Props = {
  className?: string;
  priority?: boolean;
  sizes?: string;
  alt?: string;
};

export function EnoPortrait({
  className,
  priority,
  sizes,
  alt = "Eno Eka — keynote speaker, author, and educator",
}: Props) {
  return (
    <Image
      src={enoPortraitSrc}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes ?? "(max-width: 1024px) 100vw, 400px"}
      className={className ?? "object-cover object-[center_15%]"}
    />
  );
}
