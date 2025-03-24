import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Suyas56" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400 transition">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/suyashvishnoi56/" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400 transition">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400 transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-blue-400 transition"><a href="/">Home</a></li>
              <li className="cursor-pointer hover:text-blue-400 transition"><a href="#about">About</a></li>
              <li className="cursor-pointer hover:text-blue-400 transition"><a href="#education">Education & Experience</a></li>
              <li className="cursor-pointer hover:text-blue-400 transition"><a href="#project">Projects</a></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-white-400">
              <a href="https://maps.app.goo.gl/8m3N6PNd1GXHuE7TA" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400 transition">Kanpur, Uttar Pradesh</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-5 pt-3 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Suyash Vishnoi. All rights reserved.</p>
          <p className="flex items-center text-sm text-gray-400 mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Suyash Vishnoi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
