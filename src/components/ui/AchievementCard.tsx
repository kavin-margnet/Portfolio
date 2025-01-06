import React from 'react';
import { ReactNode } from 'react';

interface AchievementCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-navy-800 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
      <div className="text-cyan-400 flex justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default AchievementCard;