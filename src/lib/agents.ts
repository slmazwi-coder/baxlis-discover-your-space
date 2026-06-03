import matyana from "@/assets/agent-matyana.asset.json";
import mnxasane from "@/assets/agent-mnxasane.asset.json";
import mzaza from "@/assets/agent-mzaza.asset.json";
import render1 from "@/assets/dev-render-1.asset.json";
import render2 from "@/assets/dev-render-2.asset.json";
import render3 from "@/assets/dev-render-3.asset.json";
import site from "@/assets/dev-site.asset.json";

export type Agent = {
  slug: string;
  name: string;
  role: string;
  phone: string;
  phoneHref: string;
  email: string;
  image: string;
  bio: string;
};

export const agents: Agent[] = [
  {
    slug: "baxolise-matyana",
    name: "Baxolise Matyana",
    role: "Principal Agent & Founder",
    phone: "+27 79 775 7616",
    phoneHref: "+27797757616",
    email: "matyana@baxlis.co.za",
    image: matyana.url,
    bio: "Baxolise founded BAXLIS on the belief that property is about stories, not just transactions. He leads the agency with deep respect for heritage and an eye for what makes a home truly worth calling yours.",
  },
  {
    slug: "scelo-mnxasane",
    name: "Scelo Mnxasane",
    role: "Agent",
    phone: "+27 73 761 0675",
    phoneHref: "+27737610675",
    email: "mnxasane@baxlis.co.za",
    image: mnxasane.url,
    bio: "Scelo brings calm, considered guidance to every viewing — pairing modern marketing tools with old-school care for the people on both sides of a sale.",
  },
  {
    slug: "phambili-mzaza",
    name: "Phambili Mzaza",
    role: "Agent",
    phone: "+27 63 634 9993",
    phoneHref: "+27636349993",
    email: "mzaza@baxlis.co.za",
    image: mzaza.url,
    bio: "Phambili has spent a lifetime in property and community. He knows the value behind a price tag and treats every owner's story with the time it deserves.",
  },
];

export const mamiesaImages = {
  hero: render3.url,
  gallery: [render3.url, render1.url, render2.url, site.url],
};