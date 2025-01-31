import Image from 'next/image';
import { NewsArticle } from '../types';

interface NewsCardProps extends NewsArticle {
  className?: string;
}

export default function NewsCard({ headline, category, date, image, description, className }: NewsCardProps) {
  return (
    <article className={`flex flex-col lg:flex-row items-center gap-x-[154px] lg:gap-x-8 ${className}`}>
      <div className="flex flex-col flex-1">
        <h2 className="font-semibold leading-loose text-slate-600">{headline}</h2>
        {description && (
          <p className="mt-4 text-4xl font-bold leading-10 text-zinc-800 dark:text-white ">{description}</p>
        )}
        <div className="flex gap-3.5 items-center self-start mt-4 text-sm font-medium leading-6">
          <time className="flex gap-2 items-center self-stretch" dateTime={date}>
            <span className="flex shrink-0 self-stretch my-auto w-3.5 h-3.5" />
            <span className="self-stretch my-auto">{date}</span>
          </time>
        </div>
        <div className="flex gap-2 items-center self-start py-3 mt-4 font-medium text-sky-500 rounded-lg min-h-[48px]">
          <span>Baca Selengkapnya</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </div>

      <div className="flex-shrink-0 mt-4 lg:mt-0 w-full lg:w-[320px]">
        <Image 
          src={image} 
          alt={headline} 
          width={320} 
          height={213}
          className="object-cover rounded-lg w-full"
        />
      </div>
    </article>
  );
}
