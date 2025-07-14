import React from "react";
import { FaUsers, FaHandsHelping, FaLightbulb, FaLaptopCode } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

export default function EducaFROLanding() {
  return (
    <>
      <Header />
      <div className="bg-[#3C3D37] min-h-screen text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Nossa História */}
          <section id="nossa-historia" className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Nossa História</h2>
            <p className="text-gray-300 leading-relaxed">
              A EducaFRO nasceu do sonho de tornar a educação acessível para todos, especialmente para jovens negros e de baixa renda.
              Desde o início, acreditamos no poder transformador do conhecimento e na importância de um ensino que valorize a diversidade,
              a identidade e a inclusão. Com o apoio de voluntários, professores, desenvolvedores e lideranças comunitárias,
              construímos uma rede de apoio educacional que já impactou milhares de vidas.
            </p>
          </section>

          {/* Nossa Missão */}
          <section id="nossa-missao" className="mb-16 bg-[#2d2e2e] rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Nossa Missão</h2>
            <p className="text-gray-300 leading-relaxed">
              Promover a justiça social por meio da educação, criando ferramentas digitais acessíveis,
              incentivando o protagonismo negro e fortalecendo comunidades com oportunidades reais de aprendizado e crescimento.
            </p>
          </section>

          {/* Valores */}
          <section id="valores" className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Nossos Valores</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-disc pl-6 text-gray-300">
              <li><strong className="text-blue-300">Equidade:</strong> Todos têm direito ao conhecimento, sem exceção.</li>
              <li><strong className="text-blue-300">Representatividade:</strong> A valorização da identidade negra em cada detalhe.</li>
              <li><strong className="text-blue-300">Compromisso:</strong> Entregamos com propósito e excelência.</li>
              <li><strong className="text-blue-300">Colaboração:</strong> Crescemos juntos, como rede e como comunidade.</li>
              <li><strong className="text-blue-300">Inovação:</strong> Usamos a tecnologia como ponte para o futuro.</li>
              <li><strong className="text-blue-300">Empatia:</strong> Escutamos e acolhemos realidades diversas.</li>
            </ul>
          </section>

          {/* Equipe */}
          <section id="equipe" className="bg-[#2d2e2e] rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-blue-400 mb-8">Nossa Equipe</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              A equipe da EducaFRO é formada por educadores, desenvolvedores, ativistas, líderes comunitários e sonhadores.
              Juntos, unimos experiência, paixão e compromisso com a transformação social.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-[#3C3D37] p-6 rounded-xl shadow flex flex-col items-center text-center">
                <FaLaptopCode size={48} className="text-blue-400 mb-4" />
                <h3 className="font-semibold text-lg mb-1">Pedro Henrique</h3>
                <p className="text-gray-300 text-sm">Desenvolvedor React | Engenheiro de Software</p>
              </div>
              <div className="bg-[#3C3D37] p-6 rounded-xl shadow flex flex-col items-center text-center">
                <FaUsers size={48} className="text-blue-400 mb-4" />
                <h3 className="font-semibold text-lg mb-1">Ana Paula Silva</h3>
                <p className="text-gray-300 text-sm">Educadora Popular | Coordenadora Pedagógica</p>
              </div>
              <div className="bg-[#3C3D37] p-6 rounded-xl shadow flex flex-col items-center text-center">
                <FaHandsHelping size={48} className="text-blue-400 mb-4" />
                <h3 className="font-semibold text-lg mb-1">João dos Santos</h3>
                <p className="text-gray-300 text-sm">Designer Social | Comunicação e Identidade</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
