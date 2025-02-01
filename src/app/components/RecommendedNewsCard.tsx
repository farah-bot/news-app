import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from "../utils/dateFormatter";

interface RecommendedNewsCardProps {
  link: string;
  title: string;
  thumbnail: string;
  description: string;
  pubDate: string;
}

export const RecommendedNewsCard: React.FC<RecommendedNewsCardProps> = ({
  link,
  title,
  thumbnail,
  description,
  pubDate,
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 min-w-[240px] max-w-full h-[197px]">
      <Image
        src={thumbnail}
        alt={title}
        layout="responsive"
        width={100}
        height={75}
        className="w-full h-auto object-cover rounded-md"
      />
      <div className="flex flex-col gap-3 justify-between h-full">
        <Link
          href={`/detail?link=${encodeURIComponent(link)}&title=${encodeURIComponent(
            title
          )}&thumbnail=${encodeURIComponent(thumbnail)}&description=${encodeURIComponent(description)}`}
          className="text-base font-semibold line-clamp-3 hover:underline"
        >
          {title}
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <div className="text-blue-500 text-sm font-semibold">Nasional</div>
          <span className="text-gray-500 text-sm">•</span> 
          <span className="text-gray-500 text-sm">{formatDate(pubDate)}</span>
        </div>
      </div>
    </div>
  );
};
