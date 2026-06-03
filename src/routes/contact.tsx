import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { agents } from "@/lib/agents";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BAXLIS Real Estate" },
      { name: "description", content: "Get in touch with BAXLIS Real Estate. Speak to principal agent Baxolise Matyana or our team." },
      { property: "og:title", content: "Contact BAXLIS" },
      { property: "og:description", content: "Let's explore what your property can really offer." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
        <h1 className="font-display mt-6 text-5xl md:text-7xl max-w-3xl">
          Let's explore what your property can <em className="text-primary">really offer</em>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-12 lg:grid-cols-2">
        <form
          className="rounded-md border border-border bg-card p-8 space-y-5"
          action={`mailto:${agents[0].email}`}
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" />
            <Field label="Phone" name="phone" type="tel" />
          </div>
          <Field label="Email" name="email" type="email" />
          <Field label="Subject" name="subject" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={5}
              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90"
          >
            Send message
          </button>
        </form>

        <div className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Direct lines</p>
            <h2 className="font-display mt-3 text-3xl">Talk to an agent</h2>
            <ul className="mt-6 divide-y divide-border">
              {agents.map((a) => (
                <li key={a.slug} className="py-5">
                  <p className="font-display text-xl">{a.name}</p>
                  <p className="text-sm text-muted-foreground">{a.role}</p>
                  <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                    <a href={`tel:${a.phoneHref}`} className="text-primary hover:underline">{a.phone}</a>
                    <a href={`mailto:${a.email}`} className="text-primary hover:underline">{a.email}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md bg-primary p-8 text-primary-foreground">
            <p className="font-display text-2xl">BAXLIS — Property solutions for the future.</p>
            <p className="mt-3 text-sm text-primary-foreground/80">
              We respond to enquiries within one business day. For pre-recorded viewings, please mention the property in your message.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}