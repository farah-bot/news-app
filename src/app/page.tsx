'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import NewsCard from './components/NewsCard';
import { PopularNewsCard } from './components/PopularNewsCard';
import { RecommendedNewsCard } from './components/RecommendedNewsCard';
import { SearchBar } from './components/SearchBar';
import { fetchAntaraNews } from './utils/api';
import AdsCard from './components/AdsCard';

const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function NewsPage() {
  const [popularNews, setPopularNews] = useState<any[]>([]);
  const [recommendedNews, setRecommendedNews] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const newsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { popularNews, recommendedNews } = await fetchAntaraNews();
        setPopularNews(popularNews);
        setRecommendedNews(shuffleArray(recommendedNews));
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(recommendedNews.length / newsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const currentRecommendedNews = recommendedNews.slice(
    (currentPage - 1) * newsPerPage,
    currentPage * newsPerPage
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const adsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main className="flex flex-col items-center justify-center p-20 max-md:px-5">
      <section className="flex flex-col justify-center w-full rounded-xl max-md:max-w-full">
        {popularNews.length > 0 ? (
          <Slider {...sliderSettings}>
            {popularNews.slice(0, 3).map((news, index) => (
              <NewsCard
                key={news.id || index}
                link={news.link}
                title={news.title}
                description={news.description}
                thumbnail={news.thumbnail}
                pubDate={news.pubDate}
              />
            ))}
          </Slider>
        ) : (
          <p></p>
        )}
      </section>

      {loading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-white dark:bg-gray-900">
          <div className="loader"></div>
        </div>

      ) : error ? (
        <div className="bg-red-100 text-red-600 p-4 rounded-md text-center">
          {error}
        </div>
      ) : (
        <>
          <section className="mt-10 w-full max-w-screen-lg mx-auto">
            <h2 id="popular-news" className="flex gap-4 self-start py-3 text-2xl font-bold leading-snug text-black dark:text-white">
              <div className="flex shrink-0 w-1 bg-sky-500 h-[34px] rounded-[200px]" />
              Berita Terpopuler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {popularNews.length > 0 ? popularNews.slice(0, 3).map((news, index) => (
                <PopularNewsCard 
                  key={news.id || index}  
                  {...news} 
                  number={index + 1}
                />
              )) : <p>No popular news available.</p>}
            </div>
          </section>

          <section className="mt-10 w-full max-w-screen-lg mx-auto">
            <div className="flex justify-between items-center py-3">
              <h2 id="recommended-news" className="flex gap-4 self-start text-2xl font-bold leading-snug text-black dark:text-white">
                <div className="flex shrink-0 w-1 bg-sky-500 h-[34px] rounded-[200px]" />
                Rekomendasi Untuk Anda
              </h2>
              <div className="flex justify-end max-md:w-auto">
                <SearchBar />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-32 mt-4">
              {currentRecommendedNews.length > 0 ? currentRecommendedNews.map((news, index) => (
                <RecommendedNewsCard 
                  key={news.link || index} 
                  link={news.link}
                  title={news.title}
                  thumbnail={news.thumbnail}
                  pubDate={news.pubDate}
                  description={news.description}
                />
              )) : <p>No recommended news available.</p>}
            </div>   
              </section>

              <section className="mt-10 w-full max-w-screen-lg mx-auto">
                            <div className="mt-20">
              <div className="flex justify-between items-center mt-10 gap-5">
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 text-lg font-medium">
                    Showing {(currentPage - 1) * 8 + 1} to {Math.min(currentPage * 8, recommendedNews.length)} of {recommendedNews.length} results
                  </span>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handlePrevPage}
                    className="px-4 py-2 bg-sky-500 text-white rounded-md disabled:opacity-50"
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextPage}
                    className="px-4 py-2 bg-sky-500 text-white rounded-md disabled:opacity-50"
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
                </div>
                </section>

          <section className="mt-20 w-full max-w-screen-lg mx-auto">
            <Slider {...adsSliderSettings}>
              <div className="flex justify-center items-center">
                <AdsCard 
                  title="Keajaiban Bawah Laut di Raja Ampat! 🐠" 
                  description="Menyelamlah ke dalam surga bawah laut terbaik di dunia! Jelajahi terumbu karang, ikan warna-warni, dan keindahan laut yang memukau di Raja Ampat!" 
                  image="/ra.png"
                />
              </div>
              <div className="flex justify-center items-center">
                <AdsCard 
                  title="Petualangan Mistis di Kawah Ijen! 🔥" 
                  description="Rasakan pengalaman mendaki unik dengan fenomena api biru di Kawah Ijen! Nikmati sunrise spektakuler dari puncak gunung berapi yang legendaris." 
                  image="/ki.png"
                />
              </div>
              <div className="flex justify-center items-center">
                <AdsCard 
                  title="Eksplorasi Alam di Desa Wisata Penglipuran! 🌿" 
                  description="Nikmati kesejukan dan ketenangan di salah satu desa terbersih di dunia! Jelajahi budaya, arsitektur tradisional, dan keramahan penduduk lokal." 
                  image="/bangli.png"
                />
              </div>
            </Slider>
          </section>
        </>
      )}
    </main>
  );
}
