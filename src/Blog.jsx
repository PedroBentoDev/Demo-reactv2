import React from 'react';
import Coursecard from './Coursecard'; 
import Header from './Header';
import Footer from './Footer';

const posts = [
  {
    img: "https://source.unsplash.com/600x400/?african-art",
    title: "A importância da arte negra",
    description: "Entenda como a arte produzida por pessoas negras ajuda a ressignificar histórias e culturas.",
    link: "/post/arte-negra",
    Btntxt: "Leia mais",
  },
  {
    img: "https://source.unsplash.com/600x400/?black-literature",
    title: "Literatura negra no Brasil",
    description: "Explore autoras e autores que marcaram a literatura afro-brasileira.",
    link: "/post/literatura-negra",
    Btntxt: "Leia mais",
  },
  {
    img: "https://source.unsplash.com/600x400/?black-history",
    title: "A história que não te contaram",
    description: "Reflexões sobre como a história negra é invisibilizada e por que precisamos resgatá-la.",
    link: "/post/historia-negra",
    Btntxt: "Leia mais",
  },
];

function Blog() {
  return (
  <><Header/>
    <main className="bg-[#3C3D37] min-h-screen py-12 px-4">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
          Nosso Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Coursecard
              key={index}
              imgSrc={post.img}
              title={post.title}
              description={post.description}
              link={post.link}
              Btntxt={post.Btntxt}
            />
          ))}
        </div>
      </section>
    </main>
    <Footer/>
    
  </>
    
  );
}

export default Blog;