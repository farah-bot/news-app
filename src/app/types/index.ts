interface NewsArticle {
  link: string;
  title: string;
  description: string;
  thumbnail: string;
  pubDate: string;
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
  pubDate: string;
}

export type { NewsArticle, PopularNews, RecommendedNews };