// Image URLs - using placeholder for demo
// Replace with actual hosted images for production
const PLACEHOLDER_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23111' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23666' font-size='12'%3EBAXLIS%3C/text%3E%3C/svg%3E";

// For production, use: https://your-cdn.com/path/to/image.jpg
const MATYANA_URL = PLACEHOLDER_IMG;
const MNXASANE_URL = PLACEHOLDER_IMG;
const MZAza_URL = PLACEHOLDER_IMG;
const RENDER1_URL = PLACEHOLDER_IMG;
const RENDER2_URL = PLACEHOLDER_IMG;
const RENDER3_URL = PLACEHOLDER_IMG;
const SITE_URL = PLACEHOLDER_IMG;

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
    image: MATYANA_URL,
    bio: "Baxolise founded BAXLIS on the belief that property is about stories, not just transactions. He leads the agency with deep respect for heritage and an eye for what makes a home truly worth calling yours.",
  },
  {
    slug: "scelo-mnxasane",
    name: "Scelo Mnxasane",
    role: "Agent",
    phone: "+27 73 761 0675",
    phoneHref: "+27737610675",
    email: "mnxasane@baxlis.co.za",
    image: MNXASANE_URL,
    bio: "Scelo brings calm, considered guidance to every viewing — pairing modern marketing tools with old-school care for the people on both sides of a sale.",
  },
  {
    slug: "phambili-mzaza",
    name: "Phambili Mzaza",
    role: "Agent",
    phone: "+27 63 634 9993",
    phoneHref: "+27636349993",
    email: "mzaza@baxlis.co.za",
    image: MZAza_URL,
    bio: "Phambili has spent a lifetime in property and community. He knows the value behind a price tag and treats every owner's story with the time it deserves.",
  },
];

export const mamiesaImages = {
  hero: RENDER3_URL,
  gallery: [RENDER3_URL, RENDER1_URL, RENDER2_URL, SITE_URL],
};