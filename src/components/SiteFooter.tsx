import { Link } from "react-router";

// Placeholder logo SVG
const LOGO_URL = "/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <img src={LOGO_URL} alt="BAXLIS Real Estate" className="h-24 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            More than an agency. A community that values knowledge, beauty and trust.
          </p>
        </div>
        <div>
          <p className="font-display text-xl text-foreground">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/listings" className="hover:text-primary">Listings</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/agents" className="hover:text-primary">Our agents</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-xl text-foreground">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Principal Agent: Baxolise Matyana</li>
            <li><a href="tel:+27797757616" className="hover:text-primary">+27 79 775 7616</a></li>
            <li><a href="mailto:matyana@baxlis.co.za" className="hover:text-primary">matyana@baxlis.co.za</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} BAXLIS Real Estate. All rights reserved.</p>
          <p>Property solutions for the future.</p>
        </div>
      </div>
    </footer>
  );
}