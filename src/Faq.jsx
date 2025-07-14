import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Faq = () => {
  return (
    <>
      <Header />
      <div className="bg-[#3C3D37] min-h-screen text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-12">
            Perguntas Frequentes (FAQ)
          </h1>

          {/* === Sobre os Cursos === */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6 pb-2 border-b border-blue-400">
              Sobre os Cursos
            </h2>

            <div className="bg-[#2d2e2e] rounded-lg shadow-md p-6 mb-4">
              <p className="text-lg font-medium text-blue-300 mb-2">
                Os cursos são realmente gratuitos?
              </p>
              <p className="text-gray-200">
                Sim! Todos os nossos cursos de TI e aprimoramento
                pessoal/profissional são 100% gratuitos.
              </p>
            </div>

            <div className="bg-[#2d2e2e] rounded-lg shadow-md p-6 mb-4">
              <p className="text-lg font-medium text-blue-300 mb-2">
                Preciso me cadastrar para fazer um curso?
              </p>
              <p className="text-gray-200">
                Sim, você precisa criar uma conta gratuita para acompanhar seu
                progresso, acessar materiais e emitir certificados.
              </p>
            </div>

            <div className="bg-[#2d2e2e] rounded-lg shadow-md p-6 mb-4">
              <p className="text-lg font-medium text-blue-300 mb-2">
                Vocês oferecem certificado?
              </p>
              <p className="text-gray-200">
                Sim! Após concluir o curso e realizar as atividades, você poderá
                emitir gratuitamente um certificado digital.
              </p>
            </div>
          </section>

          {/* === Quizzes Educacionais === */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6 pb-2 border-b border-blue-400">
              Sobre os Quizzes Educacionais
            </h2>

            <div className="bg-[#2d2e2e] rounded-lg shadow-md p-6 mb-4">
              <p className="text-lg font-medium text-blue-300 mb-2">
                Como funcionam os quizzes?
              </p>
              <p className="text-gray-200">
                São jogos interativos para revisar conteúdos e testar seus
                conhecimentos, acessíveis a qualquer momento.
              </p>
            </div>

            <div className="bg-[#2d2e2e] rounded-lg shadow-md p-6 mb-4">
              <p className="text-lg font-medium text-blue-300 mb-2">
                Os quizzes são gratuitos?
              </p>
              <p className="text-gray-200">
                Sim, todos os quizzes são gratuitos e disponíveis para usuários
                cadastrados.
              </p>
            </div>
          </section>

          {/* === Biblioteca Cultural === */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6 pb-2 border-b border-blue-400">
              Sobre a Biblioteca Cultural
            </h2>

            <div className="bg-[#2d2e2e] rounded-lg shadow-md p-6 mb-4">
              <p className="text-lg font-medium text-blue-300 mb-2">
                O que encontro na biblioteca cultural?
              </p>
              <p className="text-gray-200">
                Pinturas, esculturas, literatura e outros acervos culturais para
                enriquecer seus conhecimentos em arte, história e cultura.
              </p>
            </div>

            <div className="bg-[#2d2e2e] rounded-lg shadow-md p-6 mb-4">
              <p className="text-lg font-medium text-blue-300 mb-2">
                É permitido usar os materiais da biblioteca?
              </p>
              <p className="text-gray-200">
                Sim, para fins educativos. Para uso comercial, consulte as
                licenças de cada obra.
              </p>
            </div>
          </section>

          {/* === Acesso e Suporte === */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6 pb-2 border-b border-blue-400">
              Acesso e Suporte
            </h2>

            <div className="bg-[#2d2e2e] rounded-lg shadow-md p-6 mb-4">
              <p className="text-lg font-medium text-blue-300 mb-2">
                Posso acessar o site em celular ou tablet?
              </p>
              <p className="text-gray-200">
                Sim! Nosso site é responsivo, projetado para funcionar em
                qualquer dispositivo.
              </p>
            </div>

            <div className="bg-[#2d2e2e] rounded-lg shadow-md p-6 mb-4">
              <p className="text-lg font-medium text-blue-300 mb-2">
                Esqueci minha senha. O que faço?
              </p>
              <p className="text-gray-200">
                Clique em "Esqueci minha senha" na tela de login para
                redefini-la.
              </p>
            </div>

            <div className="bg-[#2d2e2e] rounded-lg shadow-md p-6 mb-4">
              <p className="text-lg font-medium text-blue-300 mb-2">
                Como falo com o suporte?
              </p>
              <p className="text-gray-200">
                Envie um e-mail para{" "}
                <a
                  href="mailto:suporte@seusite.com"
                  className="text-blue-400 hover:underline"
                >
                  suporte@seusite.com
                </a>{" "}
                ou fale conosco pelo WhatsApp.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;