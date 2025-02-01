import Image from 'next/image';
import Link from 'next/link';
import { NewsArticle } from '../types';
import { formatDate } from "../utils/dateFormatter";

interface NewsCardProps extends NewsArticle {
  className?: string;
}

export default function NewsCard({
  link,
  title,
  description,
  thumbnail,
  pubDate }: NewsCardProps) {


  const formattedDate = formatDate(pubDate, true);

  return (
    <article className={`flex flex-col lg:flex-row items-center gap-x-[154px] lg:gap-x-8`}>
      <div className="flex flex-col flex-1">
        <h2 className="font-semibold leading-loose text-slate-600">Headline</h2>
        {description && (
          <p className="mt-4 text-4xl font-bold leading-10 text-zinc-800 dark:text-white ">{description}</p>
        )}
        <div className="flex gap-3.5 items-center self-start mt-4 text-sm font-medium leading-6">
          <span className="flex shrink-0 self-stretch my-auto w-3.5 h-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 2V6M16 2V6M4 6H20C21.1046 6 22 6.8954 22 8V18C22 19.1046 21.1046 20 20 20H4C2.8954 20 2 19.1046 2 18V8C2 6.8954 2.8954 6 4 6Z" />
            </svg>
          </span>
          <time className="text-gray-500 self-stretch my-auto">{formattedDate}</time> 
        </div>


        <Link
          href={`/detail?link=${encodeURIComponent(link)}&title=${encodeURIComponent(
            title
          )}&thumbnail=${encodeURIComponent(thumbnail)}&description=${encodeURIComponent(description)}`} // Use the link provided for navigation
          className="flex gap-2 items-center self-start py-3 mt-4 font-medium text-sky-500 rounded-lg min-h-[48px]"
        >
          <span>Baca Selengkapnya</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </Link>
      </div>

      <div className="flex-shrink-0 mt-4 lg:mt-0 w-full lg:w-[320px]">
        <Image 
          src={thumbnail} 
          alt={title} 
          width={320} 
          height={213}
          className="object-cover rounded-lg w-full"
        />
      </div>
    </article>
  );
}
