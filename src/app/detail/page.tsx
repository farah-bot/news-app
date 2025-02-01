"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

const Loading = () => <div>Loading...</div>;

const DetailPage = () => {
  const searchParams = useSearchParams();
  const link = searchParams.get("link");
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    if (link) {
      const fetchArticle = async () => {
        try {
          const response = await fetch(link);
          const data = await response.json();
          setArticle(data);
        } catch (error) {
          console.error("Failed to fetch article:", error);
        }
      };

      fetchArticle();
    }
  }, [link]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold">{article.title}</h1>
      <Image
        src={article.thumbnail}
        alt={article.title}
        width={1000} 
        height={500} 
        className="object-cover mt-4 rounded-md"
      />
      <div className="mt-4 text-lg">{article.description}</div>
      <div className="text-sm text-gray-500 mt-2">{article.pubDate}</div>
    </div>
  );
};

const SuspenseWrapper = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DetailPage />
    </Suspense>
  );
};

export default SuspenseWrapper;
