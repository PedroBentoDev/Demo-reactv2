import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import Cursos from "./Cursos";
import SignInForm from "./Signinform";
import SignUpForm from "./Signup";
import Libary from "./Libary";
import Blog from "./Blog";
import Categories from "./Categories";
import BlogArchive from "./BlogArchive";
import Faq from "./Faq";
import Contato from "./Contato";
import HelpCenter from "./Helpcenter";
import Ong1page from "./Ong1page";
import Ong2page from "./Ong2page";
import Ong3page from "./Ong3page"
import Sobrenos from "./Sobrenos";
import Forum from "./Forum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/Signinform" element={<SignInForm />} />
        <Route path="/Signup" element={<SignUpForm />} />
        <Route path="/Libary" element={<Libary />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/BlogArchive" element={<BlogArchive />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Helpcenter" element={<HelpCenter />} />
        <Route path="/Ong1page" element={<Ong1page />} />
        <Route path="/Ong2page" element={<Ong2page />} />
        <Route path="/Ong3page" element={<Ong3page />} />
        <Route path="/Sobrenos" element={<Sobrenos />} />
        <Route path="/Forum" element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
