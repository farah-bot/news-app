import React from 'react';
import Image from 'next/image';

interface PopularNewsCardProps {
  link: string;
  title: string;
  thumbnail: string;
  date: string;
  number: number;
}

export const PopularNewsCard: React.FC<PopularNewsCardProps> = ({ link, title, thumbnail, date, number }) => {
  return (
    <div className="flex relative flex-1 shrink gap-4 justify-center items-start p-4 h-full rounded-xl basis-0 min-w-[240px]">
      <div className="absolute px-2 text-sm font-bold leading-tight text-white whitespace-nowrap bg-gray-800 left-[5px] rounded-[200px]">
        {number}
      </div>
      
      <div className="flex">
        <Image
          src={thumbnail}
          alt={title}
          width={24} 
          height={24}
          className="object-cover rounded-md mr-4"
        />
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-xs text-gray-400 mt-2">{date}</p>
          <a href={link} className="text-blue-500 hover:underline mt-2 inline-block">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
