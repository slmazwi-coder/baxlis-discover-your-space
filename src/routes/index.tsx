import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { agents, mamiesaImages } from "@/lib/agents";
import { SiteLayout } from "@/components/SiteLayout";
import logo from "@/assets/logo-transparent.asset.json";
import { BrandedPortrait } from "@/components/BrandedPortrait";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BAXLIS Real Estate — More Than an Agency" },
      { name: "description", content: "BAXLIS is a new-age real estate agency discovering exceptional properties and sharing their stories — residential, commercial, industrial and farms." },
      { property: "og:title", content: "BAXLIS Real Estate — More Than an Agency" },
      { property: "og:description", content: "Discover homes, developments and land with BAXLIS. Property solutions for the future." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background">
        {/* Decorative background image */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <img
            src={heroImg}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>
        {/* Soft glow behind logo */}
        <div className="pointer-events-none absolute left-1/2 top-[35%] -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary">Est. — Real Estate Reimagined</p>

          {/* Big logo — centerpiece */}
          <div className="mt-10 flex justify-center">
            <img
              src={logo.url}
              alt="BAXLIS Real Estate"
              className="w-full max-w-[280px] sm:max-w-md md:max-w-2xl lg:max-w-3xl h-auto drop-shadow-[0_10px_40px_rgba(15,80,90,0.25)]"
            />
          </div>

          {/* Decorative divider */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-xs uppercase tracking-[0.45em] text-foreground/60">Discover · Experience · Belong</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>

          <h1 className="sr-only">BAXLIS Real Estate — More than an agency. A community.</h1>
          <p className="font-display mt-10 text-3xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mx-auto">
            More than an agency. <span className="italic text-primary">A community.</span>
          </p>
          <p className="mt-6 max-w-xl mx-auto text-base text-foreground/75 md:text-lg">
            We don't wait in the office for deals. We go out, discover exceptional properties, and share their stories — because every home has a history worth knowing.
          </p>
          <div className="mt-10 flex justify-center flex-wrap gap-3">
            <Link to="/listings" className="rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20">
              Explore listings
            </Link>
            <Link to="/about" className="rounded-full border border-foreground/20 px-7 py-3 text-sm text-foreground hover:border-primary hover:text-primary">
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Our beliefs</p>
            <h2 className="font-display mt-4 text-4xl md:text-5xl">Property is about discovery, not just deals.</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { n: "01", t: "Experience over transactions", d: "We value the heritage and sentimental weight behind every property, and take time to understand what matters to our owners." },
              { n: "02", t: "Knowledge + technology", d: "Deep property expertise paired with AI-powered tools and modern marketing — that's what makes our listings stand out." },
              { n: "03", t: "Respect for time & privacy", d: "Pre-recorded viewings save you time and protect privacy. Physical viewings are reserved for pre-approved, serious buyers." },
            ].map((b) => (
              <article key={b.n} className="border-t border-border pt-6">
                <p className="font-display text-2xl text-primary">{b.n}</p>
                <h3 className="mt-4 text-base font-medium text-foreground">{b.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured listing */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Featured development</p>
              <h2 className="font-display mt-4 text-4xl md:text-5xl">New homes at Mamiesa</h2>
            </div>
            <Link to="/listings" className="text-sm text-primary hover:underline">View all listings →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <img src={mamiesaImages.gallery[0]} alt="Mamiesa home — front elevation" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />
            <div className="grid grid-cols-2 gap-6">
              {mamiesaImages.gallery.slice(1).map((src, i) => (
                <img key={i} src={src} alt={`Mamiesa development ${i + 2}`} loading="lazy" className="aspect-square w-full rounded-md object-cover" />
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4 text-sm">
            {[
              ["Location", "Mamiesa"],
              ["Layout", "3 bed, open-plan living"],
              ["Size", "180 m²"],
              ["Price", "POA"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-border pt-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{k}</p>
                <p className="mt-2 font-display text-2xl text-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Property solutions</p>
        <h2 className="font-display mt-4 text-4xl md:text-5xl max-w-2xl">A full-service partner — from development to farms.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Property development", d: "Partnering on residential developments from concept to completion." },
            { t: "Residential", d: "Homes for first-time buyers, families and seasoned investors." },
            { t: "Commercial", d: "Offices, retail and mixed-use space tailored to your business." },
            { t: "Industrial & farms", d: "Warehouses, sites and working farmland across the country." },
          ].map((s) => (
            <div key={s.t} className="rounded-md border border-border bg-card p-6">
              <h3 className="font-display text-2xl text-foreground">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agents preview */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">The team</p>
              <h2 className="font-display mt-4 text-4xl md:text-5xl">People who listen first.</h2>
            </div>
            <Link to="/agents" className="text-sm text-primary-foreground hover:underline">Meet the agents →</Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {agents.map((a) => (
              <div key={a.slug}>
                <BrandedPortrait src={a.image} alt={a.name} />
                <p className="font-display text-2xl mt-4">{a.name}</p>
                <p className="text-sm text-primary-foreground/70">{a.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="font-display text-4xl md:text-6xl max-w-3xl mx-auto">
          Let's explore what your property can really offer.
        </p>
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          <Link to="/contact" className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90">Talk to us</Link>
          <Link to="/listings" className="rounded-full border border-foreground/20 px-6 py-3 text-sm hover:border-primary hover:text-primary">Browse listings</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
