import React from "react";

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-cyan-400  py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Kavin. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
