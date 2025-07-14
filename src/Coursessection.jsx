import React from 'react';
import CourseCard from './Coursecard';

function CoursesSection() {
  const courses = [
    {
      id: 1,
      imgSrc: "https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg",
      title: "Empreendedorismo",
      description: "Aprenda habilidades essenciais para iniciar seu negócio e transformar ideias em realidade.",
      link: "cursos.html",
      Btntxt: "Saiba Mais",
    },
    {
      id: 2,
      imgSrc: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Biblioteca Digital",
      description: "Explore nossa coleção de livros, vídeos e artigos sobre cultura e educação afrocentrada.",
      link: "biblioteca.html",
      Btntxt: "Acessar",
    },
    {
      id: 3,
      imgSrc: "https://lh3.googleusercontent.com/proxy/7IWZWijQ4-IUh2pOxfoQOh9oyceXQj4Pcur2r_dCClJyT1jGHnnY6oafXYmk7giMfNMf46L0VfPOH8m7niZAcqSf3HNEZAY64R0VzqeZsgeEIxnK2YiEH8jHNgdhbTn9-J9ngkgKDLEWUptQrUgn9tGIdDIC_4OqmQ",
      title: "Evento Cultural",
      description: "Participe do nosso próximo evento e conecte-se com a comunidade. Inscreva-se agora!",
      link: "eventos.html",
      Btntxt: "Inscreva-se",
    },
  ];

  return (
    <section  className="py-12 bg-[#3C3D37]">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-extralight text-center text-white mb-8">Destaques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;