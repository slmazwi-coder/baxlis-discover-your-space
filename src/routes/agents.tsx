import { SiteLayout } from "@/components/SiteLayout";
import { agents } from "@/lib/agents";
import { BrandedPortrait } from "@/components/BrandedPortrait";

export default function AgentsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">The team</p>
        <h1 className="font-display mt-6 text-5xl md:text-7xl max-w-3xl">
          People who <em className="text-primary">listen</em> first.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 space-y-24">
        {agents.map((a, i) => (
          <article key={a.slug} className={`grid gap-10 md:grid-cols-2 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <BrandedPortrait src={a.image} alt={a.name} name={a.name} role={a.role} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">{a.role}</p>
              <h2 className="font-display mt-3 text-4xl md:text-5xl">{a.name}</h2>
              <p className="mt-6 text-base text-foreground/80 max-w-md">{a.bio}</p>
              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex gap-4">
                  <dt className="w-20 text-muted-foreground">Phone</dt>
                  <dd><a href={`tel:${a.phoneHref}`} className="text-primary hover:underline">{a.phone}</a></dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 text-muted-foreground">Email</dt>
                  <dd><a href={`mailto:${a.email}`} className="text-primary hover:underline">{a.email}</a></dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}