import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: Skill[];
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills, index }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-navy-800 p-8 rounded-lg hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="text-cyan-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-6">
        {skills.map((skill, idx) => (
          <SkillBar 
            key={idx}
            name={skill.name}
            level={skill.level}
            delay={index * 0.1 + idx * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;