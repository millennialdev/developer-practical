interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  centered = false,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {tag && (
        <span className="text-brand-red font-semibold text-sm tracking-widest uppercase font-body">
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[40px] font-bold font-heading leading-tight ${tag ? "mt-3" : ""} ${light ? "text-white" : "text-brand-black"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-brand-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
