import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import TimelineCard from "../ui/TimelineCard";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Airscale Pvt Ltd, Coimbatore",
      period: "2022 - Present",
      description:
        "Develop and maintain software solutions, collaborate with cross-functional teams to design, implement, and optimize code for high-performance applications.",
      type: "work",
    },
    {
      title: "Relationship Executive",
      company: "HDB Financial Services Limited, Pollachi",
      period: "2020 - 2022",
      description:
        "Managed client relationships, ensured customer satisfaction, and worked to meet their needs and resolve issues efficiently, contributing to customer retention.",
      type: "work",
    },
  ];

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      company: "NGM Arts and Science College",
      period: "2015 - 2018",
      description:
        "Specialized in computer science with a focus on programming, algorithms, and software development.",
      type: "education",
    },
    {
      title: "Higher Secondary Certificate",
      company: "PG Hr. Sec. School",
      period: "2014 - 2015",
      description:
        "Completed studies with a focus on mathematics, physics, and computer science.",
      type: "education",
    },
    {
      title: "Secondary School Leaving Certificate",
      company: "Govt. Hr. Sec. School",
      period: "2012 - 2013",
      description:
        "Achieved foundational education with a focus on science and mathematics.",
      type: "education",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Experience & <span className="text-cyan-400">Education</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-cyan-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <TimelineCard key={index} {...item} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-cyan-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((item, index) => (
                <TimelineCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
