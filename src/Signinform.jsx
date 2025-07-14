import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [senhaMsg, setSenhaMsg] = useState("");
  const [senhaValida, setSenhaValida] = useState(false);
  const navigate = useNavigate();

  const verificarEmail = (value) => {
    if (value.length < 3 || !value.includes("@")) {
      setEmailMsg("Email inválido! Por favor, digite novamente.");
    } else {
      setEmailMsg("Email válido! Por favor, digite a senha para prosseguir.");
    }
  };

  const verificarSenha = (value) => {
    if (value.length < 6) {
      setSenhaMsg("Senha inválida! Deve ter pelo menos 6 caracteres.");
      setSenhaValida(false);
    } else {
      setSenhaMsg("Senha válida! Você pode prosseguir.");
      setSenhaValida(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Login realizado com sucesso!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const irParaCadastro = () => {
    navigate("/Signup");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#3a3b3b] overflow-hidden px-4">
      {/* Container flex para dividir o espaço */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8 gap-8">
        {/* Formulário */}
        <div className="w-full max-w-md text-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">Login</h2>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-800">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  verificarEmail(e.target.value);
                }}
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p
                className={`text-xs ${
                  emailMsg.includes("inválido") ? "text-red-500" : "text-green-600"
                }`}
              >
                {emailMsg}
              </p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-800">Senha:</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                  verificarSenha(e.target.value);
                }}
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p
                className={`text-xs ${
                  senhaMsg.includes("inválida") ? "text-red-500" : "text-green-600"
                }`}
              >
                {senhaMsg}
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={!senhaValida}
                className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                  senhaValida
                    ? "bg-blue-600 text-white hover:bg-blue-400"
                    : "bg-gray-400 cursor-not-allowed text-white"
                }`}
              >
                Entrar
              </button>

              <button
                type="button"
                onClick={irParaCadastro}
                className="w-full py-2 px-4 rounded-md border border-blue-600 text-blue-600 font-medium hover:bg-blue-300 transition-colors bg-white"
              >
                Criar conta
              </button>
            </div>
          </form>
        </div>

        {/* Imagem ao lado */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://images.pexels.com/photos/5082561/pexels-photo-5082561.jpeg"
            alt="Ilustração login"
            className="w-full h-auto rounded-lg opacity-80 select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
