import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  company,
  period,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 border-l-2 border-cyan-400"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
        className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-400 rounded-full"
      />
      <div className="bg-navy-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300">
        <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
        <p className="text-gray-400 mb-2">{company}</p>
        <div className="flex items-center gap-2 text-cyan-400 mb-3">
          <Calendar size={16} />
          <span className="text-sm">{period}</span>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineCard;