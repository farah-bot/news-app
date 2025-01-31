'use client';

import { useState, useEffect } from 'react';
import NewsCard from './components/NewsCard';
import { PopularNewsCard } from './components/PopularNewsCard';
import { RecommendedNewsCard } from './components/RecommendedNewsCard';
import { PopularNews, RecommendedNews } from './types';

const sources: { [key: string]: string[] } = {
  antara: ['terbaru', 'politik', 'hukum', 'ekonomi', 'bola', 'olahraga', 'humaniora', 'lifestyle', 'hiburan', 'dunia', 'tekno', 'otomotif'],
  cnbc: ['terbaru', 'investment', 'news', 'market', 'entrepreneur', 'syariah', 'tech', 'lifestyle', 'opini', 'profil'],
  cnn: ['terbaru', 'nasional', 'internasional', 'ekonomi', 'olahraga', 'teknologi', 'hiburan', 'gayahidup'],
  jpnn: ['terbaru'],
  kumparan: ['terbaru'],
  merdeka: ['terbaru', 'jakarta', 'dunia', 'gaya', 'olahraga', 'teknologi', 'otomotif', 'khas', 'sehat', 'jateng'],
  okezone: ['terbaru', 'celebrity', 'sports', 'otomotif', 'economy', 'techno', 'lifestyle', 'bola'],
  republika: ['terbaru', 'news', 'daerah', 'khazanah', 'islam', 'internasional', 'bola', 'leisure'],
  sindonews: ['terbaru', 'nasional', 'metro', 'ekbis', 'international', 'daerah', 'sports', 'otomotif', 'tekno', 'sains', 'edukasi', 'lifestyle', 'kalam'],
  suara: ['terbaru', 'bisnis', 'bola', 'lifestyle', 'entertainment', 'otomotif', 'tekno', 'health'],
  tempo: ['nasional', 'bisnis', 'metro', 'dunia', 'bola', 'cantik', 'tekno', 'otomotif', 'seleb', 'gaya', 'travel', 'difabel', 'creativelab', 'inforial', 'event'],
  tribun: ['terbaru', 'bisnis', 'superskor', 'sport', 'seleb', 'lifestyle', 'travel', 'parapuan', 'otomotif', 'techno', 'kesehatan'],
};

const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function NewsPage() {
  const [popularNews, setPopularNews] = useState<PopularNews[]>([]);
  const [recommendedNews, setRecommendedNews] = useState<RecommendedNews[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchNewsFromAllSources = async () => {
    setLoading(true);
    try {
      const allNews: PopularNews[] = [];
      const allRecommended: RecommendedNews[] = [];

      const fetchPromises = Object.entries(sources).map(([source, categories]) => {
        return categories.map((category) => {
          const apiUrl = `https://api-berita-indonesia.vercel.app/${source}/${category}/`;
          return fetch(apiUrl).then(async (response) => {
            const data = await response.json();
            if (data?.data?.posts) {
              allNews.push(...data.data.posts);
              allRecommended.push(...data.data.posts);
            } else {
              console.error(`No data for ${source} - ${category}`);
            }
          });
        });
      });

      await Promise.all(fetchPromises.flat());

      setPopularNews(allNews);
      setRecommendedNews(shuffleArray(allRecommended));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsFromAllSources();
  }, []);

  return (
    <main className="flex flex-col p-20 max-md:px-5">
      <section className="flex flex-col justify-center w-full bg-white rounded-xl max-md:max-w-full">
        <NewsCard
          id={1}
          headline="Headline"
          category="News"
          date="22 Januari 2024"
          image="/headline.png"
          description="Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi"
        />
      </section>

      {loading ? (
        <div className="flex flex-col gap-4">
          <div className="bg-gray-300 animate-pulse h-48 rounded-xl"></div>
          <div className="bg-gray-300 animate-pulse h-48 rounded-xl"></div>
          <div className="bg-gray-300 animate-pulse h-48 rounded-xl"></div>
        </div>
      ) : (
        <>
          <section className="mt-10">
            <h2 id="popular-news" className="flex gap-4 self-start py-3 text-2xl font-bold leading-snug text-black">
              <div className="flex shrink-0 w-1 bg-sky-500 h-[34px] rounded-[200px]" />
              Berita Terpopuler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {popularNews.length > 0 ? popularNews.slice(0, 3).map((news, index) => (
                <PopularNewsCard 
                  key={news.id} 
                  {...news} 
                  number={index + 1}
                />
              )) : <p>No popular news available.</p>}
            </div>
          </section>

<section className="mt-10">
  <h2 id="recommended-news" className="flex gap-4 self-start py-3 text-2xl font-bold leading-snug text-black">
    <div className="flex shrink-0 w-1 bg-sky-500 h-[34px] rounded-[200px]" />
    Rekomendasi Untuk Anda
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-32 mt-4">
    {recommendedNews.length > 0 ? recommendedNews.slice(0, 8).map((news) => (
      <RecommendedNewsCard 
        key={news.link} 
        link={news.link} 
        title={news.title} 
        thumbnail={news.thumbnail} 
        pubDate={news.pubDate} 
      />
    )) : <p>No recommended news available.</p>}
  </div>
</section>

        </>
      )}
    </main>
  );
}
