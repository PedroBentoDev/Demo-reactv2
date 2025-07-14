import React from 'react'

function Herosection() {
  return (
     <div className="relative h-screen max-h-[470px] bg-gray-900 overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src="https://images.pexels.com/photos/5999812/pexels-photo-5999812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Substitua pelo caminho da sua imagem
        alt="Arte e cultura negra"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay escuro para melhor contraste */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transformando o Futuro com <span className="text-[#4A90E2]">Educação e Cultura</span>
        </h2>

        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
          Junte-se a nós na valorização da arte e cultura negra. Educação, inclusão e oportunidades para todos.
        </p>

        <a
          href="/cadastro.html"
          className="bg-[#1e74d5] hover:bg-[#78b2f4] text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Faça Parte da Mudança
        </a>
      </div>
    </div>
  )
}

export default Herosection