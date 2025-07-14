import React from "react";
import { Link } from "react-router-dom";


const Ong1page = () => {
  return (
    <div className="ong-detail">
      <h1>Instituto Educacional Futuro</h1>
      <p>Promove inclusão social através de cursos gratuitos em tecnologia e artes. Atua em diversas comunidades e oferece formação presencial e online.</p>
      

      <Link to="/">← Voltar para ONGs</Link>
    </div>
  );
};

export default Ong1page;