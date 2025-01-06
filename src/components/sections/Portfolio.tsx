import React from "react";
import { Github, ExternalLink } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import AnimatedSection from "../ui/AnimatedSection";

const Portfolio = () => {
  const projects = [
    {
      title: "SUBSCRIB AI",
      description:
        "Led frontend development for a subscription-based platform, ensuring a user-friendly interface. Implemented a dynamic plan-based system to efficiently manage services and created personalized dashboard features to enhance user engagement.",
      image:
        "./assets/images/Project1.png", // Replace with actual image URL
      tags: ["HTML", "CSS", "Svelte.js", "SvelteKit", "TailwindCSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://subscrib.ai",
    },
    {
      title: "BUY X",
      description:
        "Directed frontend development for 'BuyX,' an e-commerce platform specializing in clothing. Contributed to critical tasks such as product pages, search functionality, and checkout processes, improving the overall online shopping experience.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800&h=500", // Replace with actual image URL
      tags: ["HTML", "CSS", "Svelte.js", "SvelteKit", "TailwindCSS"],
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
    {
      title: "Employee Onboarding System (Power Platform)",
      description:
        "Developed an employee onboarding system using Power Apps to simplify and standardize onboarding processes. Connected to SharePoint for real-time document storage and access, reducing manual data entry and expediting employee setup.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800&h=500", // Replace with actual image URL
      tags: ["Power Apps", "SharePoint", "Power Automate"],
      githubUrl: "https://github.com", // Replace with actual GitHub URL (if applicable)
      liveUrl: "#", // Replace with live demo URL (if applicable)
    },
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
