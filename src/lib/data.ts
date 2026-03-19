export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  published: boolean;
  colors?: ProductColor[];
}

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  secondaryHex?: string;
  image: string;
  backImage?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  published: boolean;
}

const baseUrl = import.meta.env.BASE_URL || '/';

export const products: Product[] = [
  {
    id: "1",
    name: "Notizbuch",
    slug: "notizbuch",
    description: "Hochwertiges Notizbuch mit AFS-Design. Perfekt für Schule und Büro.",
    price: 6.50,
    category: "Schreibwaren",
    images: [`${baseUrl}products/Notizbücher/IMG_1729.jpeg`],
    published: true
  },
  {
    id: "2",
    name: "Stoffbeutel",
    slug: "stoffbeutel",
    description: "Langlebiger Stoffbeutel mit AFS-Logo. Ideal für Einkäufe oder als Tasche.",
    price: 5.00,
    category: "Accessoires",
    images: [`${baseUrl}products/Beutel/IMG_1907.jpeg`],
    published: true
  },
  {
    id: "3",
    name: "Kugelschreiber",
    slug: "kugelschreiber",
    description: "Eleganter Kugelschreiber mit AFS-Branding. Schreibt weich und langlebig.",
    price: 1.50,
    category: "Schreibwaren",
    images: [`${baseUrl}products/Stifte/IMG_1728.jpeg`],
    published: true
  },
  {
    id: "4",
    name: "Sticker",
    slug: "sticker",
    description: "Farbenfrohe Sticker mit verschiedenen AFS-Motiven. Ideal zum Dekorieren.",
    price: 0.20,
    category: "Accessoires",
    images: [`${baseUrl}products/Sticker/IMG_1909.jpeg`],
    published: true
  },
  {
    id: "5",
    name: "Kaffeetasse",
    slug: "kaffeetasse",
    description: "Keramik-Kaffeetasse mit AFS-Design. Spülmaschinenfest.",
    price: 5.00,
    category: "Haushalt",
    images: [`${baseUrl}products/Tassen/IMG_9249.jpeg`],
    published: true
  },
  {
    id: "6",
    name: "Collage Jacken",
    slug: "collage-jacken",
    description: "Stylische Collage-Jacken mit verschiedenen Farben. Hochwertige Qualität für jeden Anlass.",
    price: 38.00,
    category: "Kleidung",
    images: [`${baseUrl}products/Collage Jacken/grey-black-front.jpeg`],
    published: true,
    colors: [
      { id: "grey-black", name: "Grau / Schwarz", hex: "#808080", secondaryHex: "#000000", image: `${baseUrl}products/Collage Jacken/grey-black-front.jpeg`, backImage: `${baseUrl}products/Collage Jacken/grey-black-back.jpeg` },
      { id: "grey-burgundy", name: "Grau / Bordeaux", hex: "#808080", secondaryHex: "#800020", image: `${baseUrl}products/Collage Jacken/grey-burgundy-front.jpeg`, backImage: `${baseUrl}products/Collage Jacken/grey-burgundy-back.jpeg` },
      { id: "grey-blue", name: "Grau / Navy Blau", hex: "#808080", secondaryHex: "#00008B", image: `${baseUrl}products/Collage Jacken/grey-blue-front.jpeg`, backImage: `${baseUrl}products/Collage Jacken/grey-blue-back.jpeg` },
      { id: "white-black", name: "Weiß / Schwarz", hex: "#FFFFFF", secondaryHex: "#000000", image: `${baseUrl}products/Collage Jacken/white-black-front.jpeg`, backImage: `${baseUrl}products/Collage Jacken/white-black-back.jpeg` },
      { id: "white-blue", name: "Weiß / Blau", hex: "#FFFFFF", secondaryHex: "#4169E1", image: `${baseUrl}products/Collage Jacken/white-blue-front.jpeg`, backImage: `${baseUrl}products/Collage Jacken/white-blue-back.jpeg` },
      { id: "white-navy", name: "Weiß / Navy", hex: "#FFFFFF", secondaryHex: "#00008B", image: `${baseUrl}products/Collage Jacken/white-navy-front.jpeg`, backImage: `${baseUrl}products/Collage Jacken/white-navy-back.jpeg` },
      { id: "white-purple", name: "Weiß / Lila", hex: "#FFFFFF", secondaryHex: "#800080", image: `${baseUrl}products/Collage Jacken/white-purple-front.jpeg`, backImage: `${baseUrl}products/Collage Jacken/white-purple-back.jpeg` }
    ]
  }
];

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Willkommen bei der AFS Schülerfirma",
    excerpt: "Wir sind die Schülerfirma des Anne-Frank-Gesamtschule und bieten verschiedene Produkte an.",
    content: "Die Schülerfirma wurde gegründet, um Schülern praktische Erfahrungen im Bereich Unternehmertum zu ermöglichen.",
    date: "2024-09-01",
    published: false
  },
  {
    id: "2",
    title: "Neue Produkte verfügbar",
    excerpt: "Entdecken Sie unsere neuesten Produkte im Shop.",
    content: "Wir haben unser Sortiment erweitert und bieten jetzt noch mehr Produkte an.",
    date: "2024-10-15",
    published: false
  }
];

export const getProducts = async (): Promise<Product[]> => {
  return products;
};

export const getNews = async (): Promise<NewsItem[]> => {
  return newsItems;
};
