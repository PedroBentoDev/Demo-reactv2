import React from "react";
import Coursecard from "./Coursecard";
import Header from "./Header";
import Footer from "./Footer";

const posts = [
  {
    imgSrc: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    title: "A tecnologia e a juventude negra",
    description: "Como jovens negros estão moldando o futuro da tecnologia.",
    link: "/blog/post/1",
    Btntxt: "Leia Mais",
  },
  {
    imgSrc: "https://vejario.abril.com.br/wp-content/uploads/2020/08/2-Monumento-%C3%A0-voz-de-Anast%C3%A1cia-2019-detalhe-Anast%C3%A1cia.jpg?quality=70&strip=info&resize=1080,565&crop=1",
    title: "História não contada",
    description: "Narrativas que você não encontra nos livros tradicionais.",
    link: "/blog/post/2",
    Btntxt: "Leia Mais",
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFFJpmMGz2DUDdAITQsqahVy_9VM8Wmv9fQ&s",
    title: "Artes visuais e resistência",
    description: "Como a arte se tornou voz de luta.",
    link: "/blog/post/3",
    Btntxt: "Leia Mais",
  },
];

function BlogArchive() {
  return (
    <>
    <Header/>
      <main className="bg-[#3C3D37] min-h-screen py-12 px-4">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
          Arquivo Completo do Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Coursecard
              key={index}
              imgSrc={post.imgSrc}
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

export default BlogArchive;