import React from "react";
import { Download, Mail, Instagram, Github, Linkedin } from "lucide-react";

const Hero = () => {
  let bash='/Portfolio'
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-navy-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Hi! I'm <span className="text-cyan-400">Kavinkumar R</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-8">
            Frontend Developer passionate about crafting interactive and
            visually appealing web experiences. I specialize in creating
            seamless user interfaces with a focus on performance and
            accessibility.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            {/* Download CV button */}
            <a
              href={`${bash}/assets/resume/personal-resume.html`} // Change this to your actual file path
              download
              className="bg-cyan-400 text-navy-900 px-6 py-3 rounded-lg font-medium hover:bg-cyan-300 transition-colors flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
            {/* Contact Me button */}
            <a
              href="mailto:kavinpgh7000@gmail.com" // Change this to your actual email
              className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-400/10 transition-colors flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-6">
            {/* <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-2xl"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a> */}
            <a
              href="https://www.github.com/kavin-margnet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-2xl"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kavinkumar-ramasamy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="relative md:w-2/5 flex items-center justify-center">
          {/* Diamond Shape Background */}
          <div className="absolute w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45"></div>

          {/* Outer Layer */}
          <div className="absolute w-72 h-72 bg-navy-900 transform rotate-45"></div>

          {/* Profile Image */}
          <img
            src="./assets/images/Media2.png"
            alt="Profile"
            className="w-72 h-96 object-cover rounded-xl border-4 border-cyan-400 shadow-xl transform hover:scale-105 hover:rotate-2 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
