interface NewsArticle {
  id: number;
  headline: string;
  category: string;
  date: string;
  image: string;
  description?: string;
}

interface PopularNews extends NewsArticle {
  link: string;
  title: string;
  description: string;
  thumbnail: string;
}

interface RecommendedNews extends NewsArticle {
  link: string;
  title: string;
  description: string;
  thumbnail: string;
}

export type { NewsArticle, PopularNews, RecommendedNews };