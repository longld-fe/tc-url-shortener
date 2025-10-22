import React from "react";

interface StatisticCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`relative bg-white rounded-lg pt-16 pb-6 px-6 text-center md:text-left shadow-md max-w-160 w-full z-10 ${className}`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-2 md:left-20 bg-[#3b3054] rounded-full w-20 h-20 p-2 grid place-content-center">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <p className="text-gray-400 mb-0 text-base leading-7">{description}</p>
    </div>
  );
};
