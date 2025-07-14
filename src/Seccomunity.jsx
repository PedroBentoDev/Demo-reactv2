import React from 'react';
function Seccomunity() {
  return (
    <div className="relative h-[400px] md:h-[500px] bg-gray-900 overflow-hidden">
      {/* Imagem de fundo com overlay escuro */}
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        alt="Comunidade diversa"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 sm:px-12 space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Junte-se à Nossa <span className="text-[#165bb3]">Comunidade</span>
        </h2>
        
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow-md">
          Transforme o futuro com educação, cultura e inclusão. Seja parte do EducAfro e faça a diferença!
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="cadastro.html"
            className="bg-[#1e74d5] hover:bg-[#165bb3] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Cadastre-se
          </a>
          <a
            href="sobre.html"
            className="bg-transparent hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition-all duration-300 transform hover:scale-105"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
}

export default Seccomunity;