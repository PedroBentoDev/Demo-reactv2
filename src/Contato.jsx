import React, { useState } from "react";
import swal from "sweetalert";
import Header from "./Header";
import Footer from "./Footer";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/pedrobentomartins68@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      const data = await response.json();

      if (response.ok) {
        setNome("");
        setEmail("");
        setMensagem("");
        swal("Enviado!", "Sua mensagem foi enviada com sucesso.", "success");
      } else {
        swal("Erro!", data.message || "Não foi possível enviar sua mensagem.", "error");
      }
    } catch (error) {
      swal("Erro!", "Não foi possível enviar sua mensagem.", "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <div className="bg-[#3C3D37] min-h-screen flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-[#2d2e2e] rounded-xl shadow-md p-8 w-full max-w-md space-y-6 text-white"
        >
          <h1 className="text-3xl font-bold text-center text-blue-400">Entre em Contato</h1>

          <input
            type="text"
            placeholder="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#3C3D37] border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#3C3D37] border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Mensagem"
            required
            rows={5}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#3C3D37] border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-colors ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
