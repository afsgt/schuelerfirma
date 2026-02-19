export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  published: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  published: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Notizbuch",
    slug: "notizbuch",
    description: "Hochwertiges Notizbuch mit AFS-Design. Perfekt für Schule und Büro.",
    price: 5.00,
    category: "Schreibwaren",
    images: ["/products/Notizbücher/IMG_1729.jpeg"],
    published: true
  },
  {
    id: "2",
    name: "Stoffbeutel",
    slug: "stoffbeutel",
    description: "Langlebiger Stoffbeutel mit AFS-Logo. Ideal für Einkäufe oder als Tasche.",
    price: 3.00,
    category: "Accessoires",
    images: ["/products/Beutel/IMG_1907.jpeg"],
    published: true
  },
  {
    id: "3",
    name: "Kugelschreiber",
    slug: "kugelschreiber",
    description: "Eleganter Kugelschreiber mit AFS-Branding. Schreibt weich und langlebig.",
    price: 1.50,
    category: "Schreibwaren",
    images: ["/products/Stifte/IMG_1728.jpeg"],
    published: true
  },
  {
    id: "4",
    name: "Sticker",
    slug: "sticker",
    description: "Farbenfrohe Sticker mit verschiedenen AFS-Motiven. Ideal zum Dekorieren.",
    price: 0.50,
    category: "Accessoires",
    images: ["/products/Sticker/IMG_1909.jpeg"],
    published: true
  },
  {
    id: "5",
    name: "Kaffeetasse",
    slug: "kaffeetasse",
    description: "Keramik-Kaffeetasse mit AFS-Design. Spülmaschinenfest.",
    price: 5.00,
    category: "Haushalt",
    images: ["/products/Tassen/IMG_9249.jpeg"],
    published: true
  }
];

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Willkommen bei der AFS Schülerfirma",
    excerpt: "Wir sind die Schülerfirma des Anne-Frank-Gymnasiums und bieten verschiedene Produkte an.",
    content: "Die Schülerfirma wurde gegründet, um Schülern praktische Erfahrungen im Bereich Unternehmertum zu ermöglichen.",
    date: "2024-09-01",
    published: true
  },
  {
    id: "2",
    title: "Neue Produkte verfügbar",
    excerpt: "Entdecken Sie unsere neuesten Produkte im Shop.",
    content: "Wir haben unser Sortiment erweitert und bieten jetzt noch mehr Produkte an.",
    date: "2024-10-15",
    published: true
  }
];

export const getProducts = async (): Promise<Product[]> => {
  return products;
};

export const getNews = async (): Promise<NewsItem[]> => {
  return newsItems;
};
