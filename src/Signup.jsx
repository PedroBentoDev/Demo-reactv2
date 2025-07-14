import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [genero, setGenero] = useState("");
  const [cpf, setCpf] = useState("");
  const [msg, setMsg] = useState("");

  const validarEmail = (email) => email.length >= 3 && email.includes("@");
  const validarSenha = (senha) => senha.length >= 6;
  const validarCPF = (cpf) => /^\d{11}$/.test(cpf);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.trim().length < 3) {
      setMsg("Nome deve ter pelo menos 3 caracteres.");
      return;
    }

    if (!validarEmail(email)) {
      setMsg("Email inválido.");
      return;
    }

    if (!validarSenha(senha)) {
      setMsg("Senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (senha !== confirmSenha) {
      setMsg("As senhas não coincidem.");
      return;
    }

    if (!nascimento) {
      setMsg("Data de nascimento é obrigatória.");
      return;
    }

    if (!genero) {
      setMsg("Selecione um gênero.");
      return;
    }

    if (!validarCPF(cpf)) {
      setMsg("CPF inválido. Deve conter 11 dígitos numéricos.");
      return;
    }

    setMsg("Cadastro realizado com sucesso!");
    alert("Cadastro realizado com sucesso!");
    navigate("/Signinform");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-md space-y-4 text-gray-600"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Crie sua conta</h2>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium">Nome completo</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#165bb3]"
              placeholder="Digite seu nome"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#165bb3]"
              placeholder="seu@email.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#165bb3]"
                placeholder="Mínimo 6 caracteres"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirmar senha</label>
              <input
                type="password"
                value={confirmSenha}
                onChange={(e) => setConfirmSenha(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#165bb3]"
                placeholder="Confirme sua senha"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Data de nascimento</label>
              <input
                type="date"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#165bb3]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Gênero</label>
              <select
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#165bb3]"
              >
                <option value="">Selecione...</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
                <option value="Prefiro não informar">Prefiro não informar</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">CPF</label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#165bb3]"
              placeholder="Somente números"
              maxLength="11"
            />
          </div>
        </div>

        {msg && (
          <div className={`mt-4 p-3 rounded-lg text-center text-sm ${
            msg.includes("sucesso") 
              ? "bg-green-100 text-green-700" 
              : "bg-red-100 text-red-700"
          }`}>
            {msg}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 px-4 mt-6 bg-[#165bb3] hover:bg-[#91bced] text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          Criar conta
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Já tem uma conta?{" "}
          <button 
            type="button" 
            onClick={() => navigate("/Signinform")}
            className="text-[#165bb3] hover:text-[#0e3e7d] font-medium"
          >
            Faça login
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;