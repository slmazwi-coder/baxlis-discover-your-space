import logo from "@/assets/logo-transparent.asset.json";

type Props = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
};

export function BrandedPortrait({ src, alt, aspect = "aspect-[4/5]", className = "" }: Props) {
  return (
    <div className={`relative overflow-hidden rounded-md bg-secondary ${aspect} ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      {/* Brand gradient wash for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
      {/* Watermark logo — bottom left */}
      <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
        <div className="rounded-md bg-background/90 px-3 py-2 backdrop-blur-sm shadow-lg">
          <img src={logo.url} alt="BAXLIS Real Estate" className="h-6 w-auto md:h-7" />
        </div>
        <span className="rounded-full bg-primary/95 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
          Real Estate
        </span>
      </div>
    </div>
  );
}