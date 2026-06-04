// Direct logo URL from Lovable CDN
const LOGO_URL = "/__l5e/assets-v1/aab6c91d-7822-4e3f-877f-2ac1bf4e1896/baxlis-logo-transparent.png";

type Props = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  name?: string;
  role?: string;
};

export function BrandedPortrait({ src, alt, aspect = "aspect-[4/5]", className = "", name, role }: Props) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-lg bg-secondary ring-1 ring-primary/20 shadow-xl shadow-primary/10 ${aspect} ${className}`}
    >
      {/* Consistent crop: face-up framing via object-top */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Brand color wash — strong bottom, subtle top */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />

      {/* Top brand bar — guarantees logo visibility on every card */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-3 py-2.5 bg-gradient-to-b from-background/80 to-transparent">
        <img src={LOGO_URL} alt="BAXLIS Real Estate" className="h-7 w-auto md:h-8 drop-shadow" />
        <span className="rounded-full bg-primary/95 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-primary-foreground">
          Real Estate
        </span>
      </div>

      {/* Large watermark on the portrait — corner stamp */}
      <img
        src={LOGO_URL}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 opacity-[0.10] mix-blend-screen rotate-[-8deg]"
      />

      {/* Diagonal brand ribbon */}
      <div className="pointer-events-none absolute -left-12 top-8 -rotate-45 bg-primary/95 px-14 py-1 text-[9px] uppercase tracking-[0.35em] text-primary-foreground shadow-md">
        BAXLIS
      </div>

      {/* Caption block — name + role over the brand wash */}
      {(name || role) && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-4 pt-10">
          <div className="flex items-end justify-between gap-3">
            <div className="text-primary-foreground">
              {name && <p className="font-display text-xl leading-tight drop-shadow">{name}</p>}
              {role && (
                <p className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/85">
                  {role}
                </p>
              )}
            </div>
            <div className="rounded-md bg-background/95 px-2 py-1.5 shadow-lg backdrop-blur-sm">
              <img src={LOGO_URL} alt="" aria-hidden className="h-5 w-auto md:h-6" />
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  );
}