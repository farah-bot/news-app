import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from "../utils/dateFormatter";

interface PopularNewsCardProps {
  link: string;
  title: string;
  thumbnail: string;
  pubDate: string;
  number: number;
  description: string;
}

export const PopularNewsCard: React.FC<PopularNewsCardProps> = ({ link, title, thumbnail, pubDate, number, description }) => {
  return (
    <div className="flex relative flex-1 shrink gap-4 justify-center items-start p-4 h-full rounded-xl basis-0 min-w-[240px]">
      <div className="absolute px-2 text-sm font-bold leading-tight text-white whitespace-nowrap bg-gray-800 left-[5px] rounded-full w-8 h-8 flex items-center justify-center">
        {number}
      </div>

      <div className="flex">
        <Image
          src={thumbnail}
          alt={title}
          width={94}
          height={94}  
          className="object-cover rounded-md mr-4"
        />
        <div>
          <Link href={`/detail?link=${encodeURIComponent(link)}&title=${encodeURIComponent(
            title
          )}&thumbnail=${encodeURIComponent(thumbnail)}&description=${encodeURIComponent(description)}`} className="text-base font-semibold hover:underline">
            <span className="line-clamp-2">{title}</span>
          </Link>
        <div className="flex items-center gap-2 mt-1">
          <div className="text-blue-500 text-sm font-semibold">Nasional</div>
          <span className="text-gray-500 text-sm">•</span>
          <span className="text-gray-500 text-sm">{formatDate(pubDate)}</span>
        </div>
        </div>
      </div>
    </div>
  );
};
