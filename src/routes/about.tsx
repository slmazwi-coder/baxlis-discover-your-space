import { Link } from 'react-router'
import { SiteLayout } from '../components/SiteLayout'

const LOGO_URL = "/logo.png";

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">About</p>
        <h1 className="font-display mt-6 text-5xl md:text-7xl max-w-4xl">
          Property is about more than <em className="text-primary">buying and selling</em>.
        </h1>
      </section>
      <section className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 md:gap-20 pb-24">
        <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-primary/10 via-secondary to-primary/5 flex items-center justify-center p-10 ring-1 ring-primary/10 shadow-xl shadow-primary/5">
          <img src={LOGO_URL} alt="BAXLIS Real Estate" className="w-full max-w-xs md:max-w-sm h-auto drop-shadow-lg" loading="lazy" />
        </div>
        <div className="space-y-6 text-base text-foreground/80 md:text-lg">
          <p>
            BAXLIS was built on a simple belief: property is about discovering places, understanding stories, and finding spaces where life happens.
          </p>
          <p>
            We're a new-age real estate agency inspired by the idea of exploring the world and experiencing property at its fullest.
          </p>
          <p>
            Every property has history and value beyond the price tag.
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
              { n: "01", t: "Experience over transactions", d: "We honour the heritage and sentimental value of every property." },
              { n: "02", t: "Knowledge + technology", d: "Modern marketing with deep property knowledge." },
              { n: "03", t: "Respect for time & privacy", d: "Pre-recorded viewings save time and protect privacy." },
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
          Join us and become part of a community that values knowledge, beauty, and trust.
        </p>
        <Link to="/contact" className="mt-10 inline-block rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90">
          Get in touch
        </Link>
      </section>
    </SiteLayout>
  );
}
