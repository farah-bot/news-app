'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { RecommendedNewsCard } from './../../components/RecommendedNewsCard';

interface NewsItem {
  link: string;
  title: string;
  thumbnail: string;
  pubDate: string;
}

const API_PATHS = {
  terbaru: "https://api-berita-indonesia.vercel.app/antara/terbaru/",
  olahraga: "https://api-berita-indonesia.vercel.app/antara/olahraga/",
  lifestyle: "https://api-berita-indonesia.vercel.app/antara/lifestyle/",
  hiburan: "https://api-berita-indonesia.vercel.app/antara/hiburan/",
  nasional: "https://api-berita-indonesia.vercel.app/cnn/nasional/",
  internasional: "https://api-berita-indonesia.vercel.app/cnn/internasional/",
};

type Category = keyof typeof API_PATHS; 

export default function CategoryPage() {
  const { category } = useParams();
  const [recommendations, setRecommendations] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (category && typeof category === 'string') {
      fetchRecommendations(category as Category);
    }
  }, [category]);

  const fetchRecommendations = async (category: Category) => {
    const apiUrl = API_PATHS[category]; // Now TypeScript knows this is safe
    if (!apiUrl) return;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data && data.data && Array.isArray(data.data.posts)) {
        const fetchedRecommendations = data.data.posts.map((item: any) => ({
          link: item.link,
          title: item.title,
          thumbnail: item.thumbnail,
          pubDate: item.pubDate,
        }));

        setRecommendations(fetchedRecommendations);
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-5xl font-extrabold mb-8 text-center capitalize mt-10">{category}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-32 mt-4">
        {recommendations.map((news) => (
          <RecommendedNewsCard
            key={news.link}
            link={news.link}
            title={news.title}
            thumbnail={news.thumbnail}
            pubDate={news.pubDate}
          />
        ))}
      </div>
    </div>
  );
}
