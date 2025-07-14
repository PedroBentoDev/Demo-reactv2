import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function FooterBottom() {
  return (
    <div className="bg-[#2d2e2e] text-gray-300 py-6 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Redes Sociais */}
        <div className="flex items-center gap-4">
          <h5 className="text-white font-medium">Siga-nos</h5>
          <div className="flex gap-3">
            <a 
              href="#" 
              className="text-gray-400 hover:text-indigo-600 text-2xl transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-indigo-600 text-2xl transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-indigo-600  text-2xl transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-indigo-600  text-2xl transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Nome do Desenvolvedor */}
        <div>
          <p className="text-gray-400 text-sm min-2xl::text-base">
            Desenvolvido por EducAfro &copy; 2025
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;