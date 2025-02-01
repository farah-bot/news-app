

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

interface PageProps {
  params: { category: Category };
}

export default async function CategoryPage({ params }: PageProps) {
  const category = params.category;

  const apiUrl = API_PATHS[category];
  if (!apiUrl) {
    return (
      <div className="p-8">
        <h1 className="text-5xl font-extrabold mb-8 text-center">Category not found</h1>
      </div>
    );
  }

  let recommendations: NewsItem[] = [];

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data && data.data && Array.isArray(data.data.posts)) {
      recommendations = data.data.posts.map((item: any) => ({
        link: item.link,
        title: item.title,
        thumbnail: item.thumbnail,
        pubDate: item.pubDate,
      }));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div className="p-8">
      <h1 className="text-5xl font-extrabold mb-8 text-center capitalize mt-10">{category}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-32 mt-4">
        {recommendations.length > 0 ? (
          recommendations.map((news) => (
            <RecommendedNewsCard
              key={news.link}
              link={news.link}
              title={news.title}
              thumbnail={news.thumbnail}
              pubDate={news.pubDate}
            />
          ))
        ) : (
          <p>No recommendations available.</p>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const categories: Category[] = ['terbaru', 'olahraga', 'lifestyle', 'hiburan', 'nasional', 'internasional'];

  return categories.map((category) => ({
    category,
  }));
}
