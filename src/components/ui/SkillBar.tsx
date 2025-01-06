import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-sm text-cyan-400">{level}%</span>
      </div>
      <div className="h-3 bg-navy-700 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ 
            duration: 1,
            delay,
            ease: "easeOut"
          }}
          className="h-full bg-cyan-400 rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;