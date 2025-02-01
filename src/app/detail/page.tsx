'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const DetailPage = () => {
  const searchParams = useSearchParams();

  const titleParam = searchParams.get('title');
  const thumbnailParam = searchParams.get('thumbnail');
  const descriptionParam = searchParams.get('description');
  const linkParam = searchParams.get('link');

  const [newsData, setNewsData] = useState<{
    title: string;
    thumbnail: string;
    description: string;
    pubDate?: string;
  } | null>(null);

  useEffect(() => {
    if (titleParam && thumbnailParam && descriptionParam) {
      setNewsData({
        title: titleParam,
        thumbnail: thumbnailParam,
        description: descriptionParam,
      });
    } else if (linkParam) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/news?link=${encodeURIComponent(linkParam)}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setNewsData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [titleParam, thumbnailParam, descriptionParam, linkParam]);

  if (!newsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{newsData.title}</h1>
      
      {newsData.pubDate && (
        <p className="text-sm text-gray-500">{newsData.pubDate}</p>
      )}


      <div className="mt-4">
        {newsData.thumbnail ? (
          <div className="relative w-[400px] h-[267px]">
            <Image
              src={newsData.thumbnail}
              alt={newsData.title || 'News Thumbnail'}
              className="object-cover rounded-md"
              fill
            />
          </div>
        ) : (
          <div>No image available</div>
        )}
      </div>

      <div className="mt-4">{newsData.description}</div>
    </div>
  );
};

export default DetailPage;
