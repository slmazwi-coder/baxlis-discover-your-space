import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BAXLIS — Our story & beliefs" },
      { name: "description", content: "BAXLIS is a new-age real estate agency built on heritage, knowledge and trust. Learn what makes us different." },
      { property: "og:title", content: "About BAXLIS" },
      { property: "og:description", content: "Property is about more than buying and selling. It's about discovering places, understanding stories, and finding spaces where life happens." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">About</p>
        <h1 className="font-display mt-6 text-5xl md:text-7xl max-w-4xl">
          Property is about more than <em className="text-primary">buying and selling</em>.
        </h1>
      </section>
      <section className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 md:gap-20 pb-24">
        <img src={heroImg} alt="A home in the landscape" className="aspect-[4/5] w-full rounded-md object-cover" loading="lazy" />
        <div className="space-y-6 text-base text-foreground/80 md:text-lg">
          <p>
            BAXLIS was built on a simple belief: property is about discovering places, understanding stories, and finding spaces where life happens.
          </p>
          <p>
            We're a new-age real estate agency inspired by the idea of exploring the world and experiencing property at its fullest. We're not office-bound — we go out, discover exceptional properties, and share their stories.
          </p>
          <p>
            Every property has history and value beyond the price tag, and we make it our mission to understand both.
          </p>
          <p className="font-display text-3xl text-primary italic">
            "We're a new-age agency, but our values are timeless: respect, knowledge, and connection."
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">What we believe</p>
          <h2 className="font-display mt-4 text-4xl md:text-5xl max-w-2xl">Three commitments that guide every relationship.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              { n: "01", t: "Experience over transactions", d: "We honour the heritage and sentimental value of every property and take time to understand what matters to our owners." },
              { n: "02", t: "Knowledge + technology", d: "We invest in deep property knowledge, AI-powered tools, and modern marketing — so listings stand out and decisions are informed." },
              { n: "03", t: "Respect for time & privacy", d: "Pre-recorded viewings protect privacy and save time. We only take pre-approved, serious clients to physical viewings — no wasted trips." },
            ].map((b) => (
              <article key={b.n}>
                <p className="font-display text-3xl text-primary">{b.n}</p>
                <h3 className="mt-3 font-display text-2xl">{b.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="font-display text-3xl md:text-5xl">
          BAXLIS — More than an agency. A community.
        </p>
        <p className="mt-6 text-muted-foreground">
          Join us — young or old — and become part of a community that values knowledge, beauty, and trust.
        </p>
        <Link to="/contact" className="mt-10 inline-block rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90">
          Get in touch
        </Link>
      </section>
    </SiteLayout>
  );
}