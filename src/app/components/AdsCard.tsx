import React from 'react';

interface AdsCardProps {
  title: string;
  description: string;
  image: string;
}

const AdsCard: React.FC<AdsCardProps> = ({ title, description, image }) => {
  const colors = [
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-purple-500'
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`rounded-2xl shadow-md p-8 md:p-20 ${randomColor} text-white mt-10`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-between">
          <h3 className="text-3xl md:text-5xl font-semibold">{title}</h3>
          <p className="mt-4 md:mt-0">{description}</p>
        </div>
        <div className="flex justify-center items-center">
          <img 
            src={image} 
            alt="Ads" 
            className="w-full h-[200px] md:h-[300px] object-cover rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
