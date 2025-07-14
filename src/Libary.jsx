import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const obras = [
  {
    tipo: "Pinturas",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmnITBAAH8c4Skk0HAbGMnXLv4wLgHCzBmA&s",
    titulo: "Sugar Shack - Ernie Barnes",
    descricao: "Famosa por capturar cenas vibrantes da cultura afro-americana, cheia de movimento e energia.",
  },
  {
    tipo: "Pinturas",
    img: "https://upload.wikimedia.org/wikipedia/en/4/46/GreatAmericaMarhsall.png",
    titulo: "Great America - Kerry James Marshall",
    descricao: "A cena mostra um grupo de pessoas negras em um barco, com um tom sombrio e irônico.",
  },
  {
    tipo: "Pinturas",
    img: "https://artic-web.imgix.net/null96bf3e03-284b-43b8-954f-fe1ce932fd21/0039MFox2020-Edit_web.jpg",
    titulo: "The People of Bisa Butler's Portraits",
    descricao: "Ela homenageia histórias esquecidas ou pouco contadas de pessoas negras com tecidos africanos.",
  },
  {
    tipo: "Escultura",
    img: "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/the-harp-augusta-savage_ver_1.jpg",
    titulo: "Augusta Savage – The Harp",
    descricao: "Inspirada na música 'Lift Every Voice and Sing', representa a luta e força do povo negro.",
  },
  {
    tipo: "Escultura",
    img: "https://schristywolfe.com/wp-content/uploads/2021/04/macbyec.png",
    titulo: "Elizabeth Catlett – Mother and Child",
    descricao: "Homenagem à maternidade e herança africana. Destaca a força das mulheres negras.",
  },
  {
    tipo: "Literatura",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIgpvcBw85jqD0UianUbez17szs1gI1NrWA&s",
    titulo: "Carolina Maria de Jesus – Quarto de Despejo",
    descricao: "Carolina registrou em diários sua vida na favela do Canindé, em São Paulo.",
  },
  {
    tipo: "Literatura",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kHRrbcj3r7FzM5FrfnTjTpKQaGRX0tJOMQ&s",
    titulo: "Conceição Evaristo – Ponciá Vicêncio",
    descricao: "Referência na literatura negra. Aborda racismo, desigualdade e a força das mulheres.",
  },
];

function Libary() {
  const [filtro, setFiltro] = useState("All");
  const [museumArt, setMuseumArt] = useState([]);

  useEffect(() => {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11")
      .then(res => res.json())
      .then(data => {
        const ids = data.objectIDs.slice(0, 6);
        return Promise.all(ids.map(id =>
          fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
            .then(res => res.json())
        ));
      })
      .then(items => {
        const valid = items.filter(i => i.primaryImageSmall);
        setMuseumArt(valid);
      });
  }, []);

  return (
    <section className="min-h-screen bg-[#3C3D37]">
      <Header />
      <div className="max-w-7xl mx-auto py-12 px-4">

        {/* ======== SEÇÃO: FILTROS + SUAS OBRAS ======== */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Escultura", "Literatura", "Pinturas"].map(tipo => (
              <button
                key={tipo}
                onClick={() => setFiltro(tipo)}
                className={`px-6 py-2 rounded-full font-medium ${
                  filtro === tipo
                    ? "bg-[#165bb3] text-white shadow-md"
                    : "bg-white text-gray-800 border hover:bg-gray-100"
                } transition-colors`}
              >
                {tipo === "All" ? "Todos" : tipo}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {obras
              .filter((obra) => filtro === "All" || obra.tipo === filtro)
              .map((obra, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border"
                >
                  <img
                    src={obra.img}
                    alt={obra.titulo}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-700 bg-purple-50 rounded-full mb-3">
                      {obra.tipo}
                    </span>
                    <h6 className="text-xl font-bold text-gray-800 mb-2">{obra.titulo}</h6>
                    <p className="text-gray-600">{obra.descricao}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* ======== NOVA SEÇÃO: MET Museum ======== */}
        <section className="bg-[#2d2e2e] py-12 px-4 rounded-lg">
          <h2 className="text-3xl font-bold text-white text-center mb-8 border-b-2 border-[#1e74d5] pb-2">
            Conheça obras do MET Museum
          </h2>

          {museumArt.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {museumArt.map((item) => (
                <div key={item.objectID} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={item.primaryImageSmall}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4 text-gray-300 text-sm text-center">
                    <strong className="text-white">{item.title}</strong>
                    <br />
                    <em>{item.artistDisplayName || "Artista desconhecido"}</em>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-300 text-center">Carregando obras do MET...</p>
          )}
        </section>

      </div>
      <Footer />
    </section>
  );
}

export default Libary;