import React from "react";
import { Link } from "react-router-dom";


const Ong2page = () => {
  return (
    <div className="ong-detail">
      <h1>Projeto Aprender Sempre</h1>
      <p>Oferece reforço escolar, formação profissional e apoio psicológico para jovens em situação de vulnerabilidade social.</p>
    

      <Link to="/">← Voltar para ONGs</Link>
    </div>
  );
};

export default Ong2page;