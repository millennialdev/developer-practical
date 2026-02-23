import Image from "next/image";

interface CardProps {
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  image,
  imageAlt = "",
  children,
  className = "",
  hoverEffect = true,
}: CardProps) {
  return (
    <article
      className={`group h-full flex flex-col bg-white rounded-lg overflow-hidden border border-brand-gray-100 ${hoverEffect ? "shadow-sm hover:shadow-xl transition-all duration-300" : ""} ${className}`}
    >
      {image && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="h-1 w-full bg-brand-red" />
      <div className="p-6 flex flex-col grow">{children}</div>
    </article>
  );
}
