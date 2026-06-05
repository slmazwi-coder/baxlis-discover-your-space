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
      className={`agent-card group relative overflow-hidden rounded-2xl ${aspect} ${className}`}
    >
      {/* Agent photo with smooth zoom on hover */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />

      {/* Premium gradient overlay — subtle at top, rich at bottom */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Soft vignette edge */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.25)]" />

      {/* Top brand bar — single prominent transparent logo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
        <img
          src={LOGO_URL}
          alt="BAXLIS Real Estate"
          className="h-12 w-auto md:h-14 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-105"
        />
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-white/90 backdrop-blur-md shadow-sm">
          Real Estate
        </span>
      </div>

      {/* Elegant gold accent line */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Caption block — name + role floating over the gradient */}
      {(name || role) && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-5 pt-16">
          <div className="transform transition-transform duration-500 group-hover:translate-y-[-4px]">
            {name && (
              <p className="font-display text-2xl leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                {name}
              </p>
            )}
            {role && (
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.3em] text-white/70">
                {role}
              </p>
            )}
            {/* Subtle underline accent */}
            <div className="mt-3 h-px w-10 bg-gradient-to-r from-amber-400/70 to-transparent transition-all duration-500 group-hover:w-16" />
          </div>
        </figcaption>
      )}
    </figure>
  );
}