import React from "react";
import { FaMoneyBillWave, FaChartLine, FaCertificate } from "react-icons/fa";
import Coursecard from "./Coursecard.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import { useNavigate } from "react-router-dom";

function Cursos() {
  const navigate = useNavigate();

  const cursos = [
    {
      imgSrc:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
      title: "Curso de React",
      description: "Aprenda React do básico ao avançado com projetos práticos.",
      link: "/curso-react",
      Btntxt: "Saiba Mais",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg",
      title: "Curso de JavaScript",
      description:
        "Domine JavaScript moderno e desenvolva aplicações incríveis.",
      link: "/curso-javascript",
      Btntxt: "Saiba Mais",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
      title: "Curso de HTML & CSS",
      description: "Construa interfaces responsivas e bonitas com HTML e CSS.",
      link: "/curso-html-css",
      Btntxt: "Saiba Mais",
    },
  ];

  const irParaLogin = () => {
    navigate("/Signinform");
  };

  return (
    <>
      <Header />

      {/* Hero principal */}
      <div className="relative h-screen max-h-[350px] bg-gray-900 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg"
          alt="Arte e cultura negra"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme seu o Futuro com os{" "}
            <span className="text-[#4A90E2]">nossos cursos</span>
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de alunos, mentores, é oportunidades para todos.
          </p>
          <button
            onClick={irParaLogin}
            className="bg-[#1e74d5] hover:bg-[#78b2f4] text-white font-bold py-3 px-8 rounded-full transition duration-300 cursor-pointer"
          >
            Entrar
          </button>
        </div>
      </div>

      {/* Cursos em Destaque */}
      <section className="bg-[#454646] py-16 px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12 border-b-4 border-[#1e74d5] inline-block pb-2">
          Cursos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
          {cursos.map((course, index) => (
            <Coursecard
              key={index}
              imgSrc={course.imgSrc}
              title={course.title}
              description={course.description}
              link={course.link}
              Btntxt={course.Btntxt}
            />
          ))}
        </div>
      </section>

      {/* Hero adicional */}
      <section className="relative h-[500px] bg-gray-900 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
          alt="Estudante aprendendo online"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Educação transforma vidas
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-6">
            Aprender é o primeiro passo para mudar o mundo — comece hoje a
            jornada que pode mudar a sua história.
          </p>
          <a
            href="/"
            className="bg-white text-[#1e74d5] hover:bg-gray-200 font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Comece agora
          </a>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-[#646464] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-3xl font-semibold text-[#1e74d5] mb-2">
            Diferenciais
          </h3>
          <p className="text-4xl font-bold text-white">
            Benefícios que você terá:
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-[#3a3b3b] p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center text-gray-300">
            <FaMoneyBillWave className="text-[#1e74d5] text-5xl mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Estude de graça
            </h3>
            <p>
              Você não paga nada para fazer os cursos. É só se matricular e
              começar a estudar de qualquer lugar que tenha conexão com a
              Internet.
            </p>
          </div>
          <div className="bg-[#3a3b3b] p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center text-gray-300">
            <FaChartLine className="text-[#1e74d5] text-5xl mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Turbine seu currículo
            </h3>
            <p>
              São mais de 90 cursos para você estudar, enriquecer seu currículo
              e aumentar suas chances de ingresso no mercado de trabalho.
            </p>
          </div>
          <div className="bg-[#3a3b3b] p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center text-gray-300">
            <FaCertificate className="text-[#1e74d5] text-5xl mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Conquiste o seu certificado
            </h3>
            <p>
              Ao ser aprovado nos cursos, você mesmo imprime o seu certificado!
            </p>
          </div>
        </div>
      </section>

      {/* Fórum */}
      <section className="bg-[#1e1e1e] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Participe da Comunidade
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Dúvidas, ideias ou quer compartilhar seu progresso? Acesse o nosso
            fórum e conecte-se com outros alunos e mentores!
          </p>
          <a
            href="/forum"
            className="bg-[#1e74d5] hover:bg-[#419cf9] text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Acessar Fórum
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Cursos;