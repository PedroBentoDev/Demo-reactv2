import React from 'react';

function Nicetomeetsec() {
  return (
    <section className="bg-[#494848] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        {/* Text Content (50% width) */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Prazer em conhece<span className="text-[#1e74d5]">-ló</span>
          </h1>
          
          <p className="text-lg text-white leading-relaxed">
            Nós somos a equipe por trás do educAfro, apaixonados por promover e valorizar a arte e a cultura negra. Acreditamos no poder transformador da educação, da expressão artística e da representatividade.
          </p>
          
          <a 
            href="/sobre.html" 
            className="inline-block bg-[#1e74d5] hover:bg-[#4A90E2] text-white font-medium py-3 px-8 rounded-full transition duration-300"
          >
            Saiba mais
          </a>
        </div>

        {/* Image Container (50% width) */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/30270988/pexels-photo-30270988/free-photo-of-close-up-de-cappuccino-com-latte-art-no-berlin-cafe.jpeg"
              alt="Cappuccino com latte art no Berlin Cafe"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nicetomeetsec;