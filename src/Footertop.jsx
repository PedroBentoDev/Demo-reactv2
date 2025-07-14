import React from "react";
import { Link } from "react-router-dom";

function Footertop() {
  return (
    <div className="bg-[#2d2e2e] text-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Blog */}
        <div>
          <h5 className="text-white font-bold text-lg mb-4 pb-2 border-b border-[#1e74d5]">
            Blog
          </h5>
          <ul className="space-y-3">
            <li>
              <Link
                to="/Blog"
                className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
              >
                Últimas Postagens
              </Link>
            </li>
            <li>
              <Link
                to="/Categories"
                className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
              >
                Categorias
              </Link>
            </li>
            <li>
              <Link
                to="/BlogArchive"
                className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
              >
                Arquivo
              </Link>
            </li>
          </ul>
        </div>

        {/* Sobre Nós */}
        <div>
          <h5 className="text-white font-bold text-lg mb-4 pb-2 border-b border-[#1e74d5]">
            Sobre Nós
          </h5>
          <ul>
          <Link
            to="/Sobrenos"
            className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
          >
           Sobre nós
          </Link>

           <li>
            <Link
            to="/Sobrenos#nossa-missao"
            className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
          >
            Missão
          </Link>
          </li>

          <li>
            <Link
            to="/Sobrenos#valores"
            className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
          >
            Nossos valores
          </Link>
          </li>
          <li>
           <Link
            to="/Sobrenos#equipe"
            className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
          >
          Equipe
          </Link>
          </li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h5 className="text-white font-bold text-lg mb-4 pb-2 border-b border-[#1e74d5]">
            Suporte
          </h5>
          <ul className="space-y-3">
            <li>
              <Link
                to="/Faq"
                className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/Contato"
                className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
              >
                Fale conosco
              </Link>
            </li>
            <li>
              <Link
                to="/Helpcenter"
                className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
              >
                Central de ajuda
              </Link>
            </li>
          </ul>
        </div>

        {/* ONGs Parceiras */}
        <div>
          <h5 className="text-white font-bold text-lg mb-4 pb-2 border-b border-[#1e74d5]">
            ONGs Parceiras
          </h5>
          <ul className="space-y-3">
            <li>
              <Link
                to="/Ong1page"
                className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
              >
                Instituto Educacional Futuro
              </Link>
            </li>
            <li>
              <Link
                to="/Ong2page"
                className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
              >
                Projeto Aprender Sempre
              </Link>
            </li>
            <li>
              <Link
                to="/Ong3page"
                className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4"
              >
                Rede Afroeducação
              </Link>
            </li>
          </ul>
        </div>

        {/* Contribuir */}
        <div className="space-y-4">
          <h5 className="text-white font-bold text-lg pb-2 border-b border-[#1e74d5]">
            Contribuir
          </h5>
          <p className="text-gray-300">
            Ajude-nos a continuar promovendo a cultura, a educação e a inclusão.
            Toda ajuda é bem-vinda!
          </p>
          <a
            href="doar.html"
            className="inline-block bg-[#1e74d5] hover:bg-[#1e74d5] text-white font-medium py-2 px-6 rounded transition-colors duration-200"
          >
            Doe Agora
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footertop;