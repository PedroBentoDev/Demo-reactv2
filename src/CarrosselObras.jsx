import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const obras = [
  {
    imagem:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/6/69/Quarto_de_Despejo.jpg/220px-Quarto_de_Despejo.jpg',
    titulo: 'Quarto de Despejo',
    autor: 'Carolina Maria de Jesus',
    ano: 1960,
  },
  {
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-GCy8FtceydRka3wulzKmPyDrx1sgbisHRA&s',
    titulo: 'Untitled (Policeman)',
    autor: 'Kerry James Marshall',
    ano: 2015,
  },
  {
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK-s7XzSG99xBWKRpSynGzrhCONt8cJuNvMg&s',
    titulo: 'Toussaint Louverture',
    autor: 'Duval-Carrie, Edouard',
    ano: 2006,
  },
]

export default function CarrosselObras() {
  const [index, setIndex] = useState(0)

  const anterior = () => {
    setIndex((prev) => (prev === 0 ? obras.length - 1 : prev - 1))
  }

  const proximo = () => {
    setIndex((prev) => (prev === obras.length - 1 ? 0 : prev + 1))
  }

  const irPara = (idx) => {
    setIndex(idx)
  }

  return (
    <section className="py-10 bg-[#4c4d4c]">
      <h2 className="text-3xl font-extralight text-center text-white mb-6">Obras Destaque</h2>

      <div className="relative max-w-xl mx-auto">
        {/* Slide atual */}
        <div className="bg-white rounded-lg shadow-md p-4 text-center transition-all duration-300">
          <img
            src={obras[index].imagem}
            alt={obras[index].titulo}
            className="mx-auto h-64 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold">{obras[index].titulo}</h3>
          <p className="text-gray-600 mt-2">
            <span className="font-bold">Autor:</span> {obras[index].autor} <br />
            <span className="font-bold">Ano:</span> {obras[index].ano}
          </p>
          <button className="mt-4 px-4 py-2 bg-[#1e74d5] text-white rounded hover:bg-[#165bb3]">
            Ver Mais
          </button>
        </div>

        {/* Botões */}
        <button
          onClick={anterior}
          aria-label="Anterior"
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-[#1e74d5] text-white p-2 rounded-full hover:bg-[#165bb3]"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={proximo}
          aria-label="Próximo"
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-[#1e74d5] text-white p-2 rounded-full hover:bg-[#165bb3]"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Bullets navigation */}
        <div className="flex justify-center space-x-3 mt-6">
          {obras.map((_, idx) => (
            <button
              key={idx}
              onClick={() => irPara(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
              className={`w-4 h-4 rounded-full transition-colors ${
                idx === index ? "bg-blue-600" : "bg-gray-300 hover:bg-blue-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
