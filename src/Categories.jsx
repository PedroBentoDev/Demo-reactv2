import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const categories = [
  { name: "Tecnologia", path: "/blog/categoria/tecnologia" },
  { name: "Cultura Negra", path: "/blog/categoria/cultura-negra" },
  { name: "História", path: "/blog/categoria/historia" },
  { name: "Artes", path: "/blog/categoria/artes" },
];

function Categories() {
  return (
    <>
      <Header />
      <main className="bg-[#3C3D37] min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
            Categorias do Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <div className="w-full" key={index}>
                <div className="bg-[#2d2e2e] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full p-6">
                  <h5 className="text-xl font-semibold text-white mb-6">
                    {cat.name}
                  </h5>
                  <Link
                    to={cat.path}
                    className="mt-auto inline-block px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md text-center transition-colors"
                  >
                    Ver posts de {cat.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Categories;