import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { mamiesaImages } from "@/lib/agents";

export const Route = createFileRoute("/listings")({
  head: () => ({
    meta: [
      { title: "Listings — BAXLIS Real Estate" },
      { name: "description", content: "Explore new development homes and curated properties from BAXLIS Real Estate." },
      { property: "og:title", content: "BAXLIS Listings" },
      { property: "og:description", content: "New development homes at Mamiesa and more." },
      { property: "og:image", content: mamiesaImages.hero },
    ],
  }),
  component: ListingsPage,
});

function ListingsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Listings</p>
        <h1 className="font-display mt-6 text-5xl md:text-7xl max-w-3xl">
          Homes worth their <em className="text-primary">story</em>.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          A curated selection of new developments and properties. Request a pre-recorded viewing for any listing — we'll send it straight to your inbox.
        </p>
      </section>

      {/* Featured listing detail */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4">
            <img src={mamiesaImages.gallery[0]} alt="Mamiesa home — main view" loading="lazy" className="aspect-[16/10] w-full rounded-md object-cover" />
            <div className="grid grid-cols-3 gap-4">
              {mamiesaImages.gallery.slice(1).map((src, i) => (
                <img key={i} src={src} alt={`Mamiesa view ${i + 2}`} loading="lazy" className="aspect-square w-full rounded-md object-cover" />
              ))}
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 self-start rounded-md border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">New development</p>
            <h2 className="font-display mt-3 text-4xl">New homes at Mamiesa</h2>
            <p className="mt-2 font-display text-2xl text-primary">POA</p>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                ["Bedrooms", "3"],
                ["Bathrooms", "1 bathroom + ensuite"],
                ["Living", "Open-plan lounge, kitchen & dining"],
                ["Garage", "Single"],
                ["Floor area", "180 m²"],
                ["Status", "Under construction"],
              ].map(([k, v]) => (
                <li key={k} className="flex justify-between gap-4 border-b border-border pb-3">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-foreground text-right">{v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Modern home with open-plan living, bathroom and ensuite, and a single garage. Set within a growing new-development community.
            </p>
            <Link to="/contact" className="mt-8 inline-block w-full rounded-full bg-primary px-6 py-3 text-center text-sm text-primary-foreground hover:opacity-90">
              Request a viewing
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-display text-3xl md:text-4xl max-w-2xl mx-auto">
            More listings are on the way — both residential and commercial.
          </p>
          <p className="mt-4 text-muted-foreground">
            Tell us what you're looking for and we'll match you with properties before they go public.
          </p>
          <Link to="/contact" className="mt-8 inline-block rounded-full border border-foreground/20 px-6 py-3 text-sm hover:border-primary hover:text-primary">
            Tell us what you're looking for
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}