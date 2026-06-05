// Agent images — downloaded from Lovable assets and served from public/__l5e/
const MATYANA_URL = "/__l5e/assets-v1/abfb0cb4-9613-4436-824f-0c77b973839b/matyana.jpg";
const MNXASANE_URL = "/__l5e/assets-v1/a68b897e-da83-4e1a-9cb6-aff99bd63034/mnxasane.jpg";
const MZAza_URL = "/__l5e/assets-v1/e644f6a0-91e9-419c-a340-5cc5e2790e92/mzaza.jpg";

// Development renders
const RENDER1_URL = "/__l5e/assets-v1/11a1a42f-4140-4273-b0c3-8debc2e663fd/mamiesa-render-1.jpg";
const RENDER2_URL = "/__l5e/assets-v1/2767a011-2f22-409c-9065-99f56a88da99/mamiesa-render-2.jpg";
const RENDER3_URL = "/__l5e/assets-v1/44a8436f-a6e6-408c-9c0b-6ca65dcc4e6e/mamiesa-render-3.jpg";
const SITE_URL = "/__l5e/assets-v1/a1d99b85-1613-44b0-917c-265590c4bdca/mamiesa-site.jpg";

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
