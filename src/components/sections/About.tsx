import React from 'react';
import { Award, BookOpen, Code, Layers } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award size={24} />, value: '2+', label: 'Years Experience' },
    { icon: <BookOpen size={24} />, value: '3+', label: 'Completed Projects' },
    { icon: <Code size={24} />, value: '5+', label: 'Technologies Mastered' },
    { icon: <Layers size={24} />, value: '2+', label: 'Frameworks Used' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over two years of experience as a Front-End Developer, I'm
              passionate about crafting dynamic web experiences. My expertise
              spans modern JavaScript technologies like Svelte, as well as HTML,
              CSS, and creating responsive layouts. When I'm not coding, I love
              staying ahead of the curve by diving into the latest trends in web
              design.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-navy-800 p-4 rounded-lg text-center"
                >
                  <div className="text-cyan-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=300&h=300"
              alt="About 1"
              className="rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300&h=300"
              alt="About 2"
              className="rounded-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;