import React from 'react';
import { Twitter, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110 hover:text-blue-400">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com/obay.dev" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110 hover:text-pink-400">
              <Instagram size={20} />
            </a>
            <a href="https://github.com/obayM" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110 hover:text-gray-400">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/obay-dev" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110 hover:text-blue-600">
              <Linkedin size={20} />
            </a>
          </div>
          <div className="text-sm opacity-75 hover:opacity-100 transition-opacity duration-300">
            Made with ❤️ by Obay
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;