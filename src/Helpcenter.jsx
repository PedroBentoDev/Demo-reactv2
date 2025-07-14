

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const HelpCenter = () => {
  return (
    <>
      <Header />
      <div className="bg-[#3C3D37] min-h-screen text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-12">
            Central de Ajuda
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Bem-vindo à Central de Ajuda! Encontre aqui as principais informações sobre nossos cursos, quizzes, biblioteca cultural e muito mais.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6 pb-2 border-b border-blue-400">
              Cursos e Conteúdos
            </h2>
            <ul className="space-y-4">
              <li className="bg-[#2d2e2e] rounded-lg shadow-md p-6">
                <strong className="text-blue-300">Como acesso os cursos?</strong>{" "}
                <span className="text-gray-200 ml-1">
                  Você precisa estar cadastrado e logado no site. Após login, navegue até a seção "Cursos".
                </span>
              </li>
              <li className="bg-[#2d2e2e] rounded-lg shadow-md p-6">
                <strong className="text-blue-300">Os cursos são pagos?</strong>{" "}
                <span className="text-gray-200 ml-1">Não, todos são gratuitos.</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6 pb-2 border-b border-blue-400">
              Quizzes e Atividades
            </h2>
            <ul className="space-y-4">
              <li className="bg-[#2d2e2e] rounded-lg shadow-md p-6">
                <strong className="text-blue-300">Como funcionam os quizzes?</strong>{" "}
                <span className="text-gray-200 ml-1">
                  São atividades para revisar o conteúdo, acessíveis a qualquer hora.
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6 pb-2 border-b border-blue-400">
              Biblioteca Cultural
            </h2>
            <ul className="space-y-4">
              <li className="bg-[#2d2e2e] rounded-lg shadow-md p-6">
                <strong className="text-blue-300">O que encontro na biblioteca?</strong>{" "}
                <span className="text-gray-200 ml-1">
                  Pinturas, esculturas, livros e materiais culturais gratuitos.
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6 pb-2 border-b border-blue-400">
              Conta e Perfil
            </h2>
            <ul className="space-y-4">
              <li className="bg-[#2d2e2e] rounded-lg shadow-md p-6">
                <strong className="text-blue-300">Como altero meus dados?</strong>{" "}
                <span className="text-gray-200 ml-1">Acesse seu perfil e clique em "Editar perfil".</span>
              </li>
              <li className="bg-[#2d2e2e] rounded-lg shadow-md p-6">
                <strong className="text-blue-300">Esqueci minha senha, e agora?</strong>{" "}
                <span className="text-gray-200 ml-1">Use a opção "Esqueci minha senha" na página de login.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6 pb-2 border-b border-blue-400">
              Contato e Suporte
            </h2>
            <p className="text-gray-200">
              Se não encontrou sua resposta aqui, fale conosco pelo e-mail:{" "}
              <a href="mailto:suporte@seusite.com" className="text-blue-400 hover:underline">
                suporte@seusite.com
              </a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;