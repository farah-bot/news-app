interface NewsItem {
  id?: string;
  link: string;
  title: string;
  thumbnail: string;
  pubDate: string;
}

interface ApiResponse {
  data: {
    posts: NewsItem[];
  };
}

const sources: { [key: string]: string[] } = {
  antara: ['terbaru', 'politik', 'hukum', 'ekonomi', 'bola', 'olahraga', 'humaniora', 'lifestyle', 'hiburan', 'dunia', 'tekno', 'otomotif'],
};

export const fetchAntaraNews = async (): Promise<{
  popularNews: NewsItem[];
  recommendedNews: NewsItem[];
}> => {
  const antaraCategories: string[] = sources.antara;
  const allNews: NewsItem[] = [];
  const allRecommended: NewsItem[] = [];

  const fetchPromises = antaraCategories.map((category: string) => {
    const apiUrl = `https://api-berita-indonesia.vercel.app/antara/${category}/`;

    return fetch(apiUrl)
      .then(async (response) => {
        if (!response.ok) {
          console.error(`Error fetching data for ${category}: ${response.statusText}`);
          return;
        }

        const data: ApiResponse = await response.json();
        
        if (data?.data?.posts && data.data.posts.length > 0) {
          allNews.push(...data.data.posts);
          allRecommended.push(...data.data.posts);
        } else {
          console.error(`No data for Antara - ${category}`);
          allNews.push({ title: `No news available for ${category}`, link: "#", thumbnail: "", pubDate: "" });
          allRecommended.push({ title: `No news available for ${category}`, link: "#", thumbnail: "", pubDate: "" });
        }
      })
      .catch((error) => {
        console.error(`Error fetching Antara news for ${category}:`, error);
      });
  });

  await Promise.all(fetchPromises);

  return {
    popularNews: allNews,
    recommendedNews: allRecommended,
  };
};
