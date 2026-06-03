import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { agents, mamiesaImages } from "@/lib/agents";
import { SiteLayout } from "@/components/SiteLayout";

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
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Modern home set against rolling hills at golden hour"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-40 md:pb-48">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">BAXLIS — Real Estate</p>
          <h1 className="font-display mt-6 text-5xl leading-[1.05] text-foreground md:text-7xl lg:text-8xl max-w-4xl">
            More than an agency.<br />
            <span className="italic text-primary">A community.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-foreground/80 md:text-lg">
            We don't wait in the office for deals. We go out, discover exceptional properties, and share their stories — because every home has a history worth knowing.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/listings" className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90">
              Explore listings
            </Link>
            <Link to="/about" className="rounded-full border border-foreground/20 px-6 py-3 text-sm text-foreground hover:border-primary hover:text-primary">
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
                <div className="aspect-[4/5] overflow-hidden rounded-md bg-primary-foreground/10">
                  <img src={a.image} alt={a.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
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
