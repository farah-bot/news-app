'use client'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

interface NewsData {
  title: string;
  thumbnail: string;
  description: string;
  pubDate?: string;
  category?: string;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

const DetailPageContent = () => {
  const searchParams = useSearchParams();

  const titleParam = searchParams.get('title');
  const thumbnailParam = searchParams.get('thumbnail');
  const descriptionParam = searchParams.get('description');
  const linkParam = searchParams.get('link');

  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

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

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now(),
        author: 'Anonymous',
        content: newComment.trim(),
        timestamp: new Date().toLocaleString(),
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  if (!newsData) {
    return <div>Loading news data...</div>;
  }

  return (
    <div className="gap-10 p-4 mt-20 flex">
      {/* Main content (News Data) */}
      <div className="flex-1 pr-4">
        <div className="mb-6">
          <nav className="text-gray-600">
            <ol className="flex items-center space-x-2">
              <li className="flex items-center">
                <Link href="/" passHref>
                  <FaHome className="text-xl text-blue-500" />
                </Link>
                <span className="ml-2">Home</span>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span>{newsData.title}</span>
              </li>
            </ol>
          </nav>
        </div>

        <h1 className="text-4xl font-bold">{newsData.title}</h1>

        {newsData.pubDate && (
          <p className="text-sm text-gray-500 mt-6">{newsData.pubDate}</p>
        )}

        {newsData.category && (
          <p className="text-sm text-gray-500 mt-2">Category: {newsData.category}</p>
        )}

        <div className="mt-10">
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

        <section className="mt-8">
          <h2 className="flex gap-4 self-start py-3 mb-10 text-2xl font-bold leading-snug text-black dark:text-white">
            <div className="flex shrink-0 w-1 bg-sky-500 h-[34px] rounded-[200px]" />
            Komentar
          </h2>

          <form onSubmit={handleCommentSubmit} className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <Image
                src="/ava.png"
                alt="Avatar"
                className="w-12 h-12 rounded-lg object-cover"
                width={48}
                height={48}
              />
            </div>

            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Apa yang ingin anda tanyakan?"
                className="p-2 border rounded-md h-24 w-full"
              />
              <button
                type="submit"
                className="self-start bg-sky-500 text-white px-4 py-2 rounded-md mt-2"
              >
                Kirim
              </button>
            </div>
          </form>

          <div className="mt-6">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="border p-4 mt-4 rounded-md">
                  <div className="flex justify-between">
                    <div className="font-medium">{comment.author}</div>
                    <div className="text-sm text-gray-400">{comment.timestamp}</div>
                  </div>
                  <p className="mt-2">{comment.content}</p>
                </div>
              ))
            ) : (
              <p>Tidak ada komentar. Jadilah yang pertama untuk mengomentari!</p>
            )}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="flex gap-4 self-start py-3 text-2xl font-bold leading-snug text-black dark:text-white">
            <div className="flex shrink-0 w-1 bg-sky-500 h-[34px] rounded-[200px]" />
            Berita Terkait
          </h2>
          <div>
            <div className="border p-4 mt-4">
              <h3 className="font-medium">Berita Terkait 1</h3>
              <p className="text-sm">Deskripsi singkat berita terkait.</p>
            </div>
            <div className="border p-4 mt-4">
              <h3 className="font-medium">Berita Terkait 2</h3>
              <p className="text-sm">Deskripsi singkat berita terkait.</p>
            </div>
            <button className="mt-4 text-blue-500">Lihat Semua</button>
          </div>
        </section>
      </div>

      <div className="w-[300px]">
        <h2 className="flex gap-4 self-start py-3 text-2xl font-bold leading-snug text-black dark:text-white">
          <div className="flex shrink-0 w-1 bg-sky-500 h-[34px] rounded-[200px]" />
          Berita Populer
        </h2>
        <div className="space-y-4">
          <div className="border p-4">
            <h3 className="font-medium">Berita Populer 1</h3>
            <p className="text-sm">Deskripsi singkat berita populer.</p>
          </div>
          <div className="border p-4">
            <h3 className="font-medium">Berita Populer 2</h3>
            <p className="text-sm">Deskripsi singkat berita populer.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageContent;
