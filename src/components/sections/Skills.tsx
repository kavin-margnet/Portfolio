import React from 'react';
import { Code, Grid, Terminal, Trophy } from 'lucide-react';
import SkillCard from '../ui/SkillCard';
import AchievementCard from '../ui/AchievementCard';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Frontend",
      skills: [
        { name: "Html5", level: 85 },
        { name: "CSS3", level: 75 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "Svelte.js", level: 70 },
        { name: "SvelteKit", level: 75 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      icon: <Grid size={24} />,
      title: "Low Code / No Code (Microsoft Power Platform)",
      skills: [
        { name: "Power Apps", level: 85 },
        { name: "Power Automate", level: 80 },
        { name: "Dynamics 365", level: 75 },
        { name: "Power BI", level: 70 },
      ],
    },
    {
      icon: <Terminal size={24} />,
      title: "Other",
      skills: [
        { name: "Git", level: 75 },
        { name: "GitHub", level: 80 },
        { name: "Jira", level: 80 },
        { name: "Restful API", level: 65 },
        { name: "Postman", level: 70 },
      ],
    },
  ];

 const achievements = [
   {
     icon: <Trophy size={24} />,
     title: "Best Performer",
     description:
       "Best Performer Core Business Award FY 2021-2022 in recognition of outstanding performance and contribution to core banking operations.",
   },
   {
     icon: <Trophy size={24} />,
     title: "Portfolio Growth",
     description:
       "Increased portfolio value by 25% within a year through effective cross-selling and upselling strategies.",
   },
   {
     icon: <Trophy size={24} />,
     title: "Sales Achievement",
     description:
       "Consistently achieved 150% of monthly sales targets for banking products, including loans and investments.",
   },
   {
     icon: <Trophy size={24} />,
     title: "Client Onboarding",
     description:
       "Onboarded 50+ new clients in six months, driving a 20% increase in overall portfolio size.",
   },
   {
     icon: <Trophy size={24} />,
     title: "Performance Optimization",
     description:
       "Reduced page load times by 30% by optimizing front-end performance and implementing reusable Svelte.js components.",
   },
   {
     icon: <Trophy size={24} />,
     title: "Feature Delivery",
     description:
       "Successfully delivered 3 key features ahead of schedule, driving a 15% increase in user engagement.",
   },
   {
     icon: <Trophy size={24} />,
     title: "Maintainability Improvement",
     description:
       "Improved maintainability by introducing a reusable component library, cutting development time for new features by 20%.",
   },
   {
     icon: <Trophy size={24} />,
     title: "UI/UX Improvements",
     description:
       "Identified and resolved critical UI/UX issues, increasing customer satisfaction scores by 25%.",
   },
   {
     icon: <Trophy size={24} />,
     title: "Mentorship",
     description:
       "Recognized for mentoring junior developers, enhancing team coding standards and overall efficiency.",
   },
   {
     icon: <Trophy size={24} />,
     title: "Best Developer",
     description:
       "Awarded Best Developer 2023 for exceptional coding and leadership contributions.",
   },
   {
     icon: <Trophy size={24} />,
     title: "Completed Projects",
     description:
       "3+ Completed Projects, showcasing diverse technical expertise and leadership.",
   },
 ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          Achievements & <span className="text-cyan-400">Awards</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;