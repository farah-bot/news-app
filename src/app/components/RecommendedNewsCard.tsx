import Link from "next/link";
import Image from "next/image";

interface RecommendedNewsCardProps {
  link: string;
  title: string;
  thumbnail: string;
  pubDate: string;
}

export const RecommendedNewsCard: React.FC<RecommendedNewsCardProps> = ({
  link,
  title,
  thumbnail,
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
        className="object-cover rounded-md"
      />
      <div className="flex flex-col gap-3 justify-between h-full">
        <Link href={`/detail?link=${encodeURIComponent(link)}`} className="text-base font-semibold line-clamp-3 hover:underline">
          {title}
        </Link>
        <div className="text-blue-500 text-sm mt-1 font-semibold">Nasional</div>
        <span className="text-gray-500 text-sm">{pubDate}</span>
      </div>
    </div>
  );
};
