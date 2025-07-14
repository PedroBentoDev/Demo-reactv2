import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { IoHeartOutline, IoSend, IoSearch } from 'react-icons/io5'

const Forum = () => {
  const [usuario, setUsuario] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [categoria, setCategoria] = useState('dúvida')
  const [posts, setPosts] = useState([])
  const [paginaAtual, setPaginaAtual] = useState(1)
  const [busca, setBusca] = useState('')
  const [filtroCategoria, setFiltroCategoria] = useState('')
  const [ordem, setOrdem] = useState('recentes')

  const postsPorPagina = 4

  useEffect(() => {
    const armazenados = JSON.parse(localStorage.getItem('forumPosts')) || []
    setPosts(armazenados)
  }, [])

  useEffect(() => {
    localStorage.setItem('forumPosts', JSON.stringify(posts))
  }, [posts])

  const handlePostar = () => {
    if (usuario.trim().length < 3) {
      Swal.fire('Erro', 'O nome de usuário deve ter pelo menos 3 caracteres.', 'error')
      return
    }

    if (mensagem.trim().length === 0 || mensagem.length > 500) {
      Swal.fire('Erro', 'A mensagem deve ter entre 1 e 500 caracteres.', 'error')
      return
    }

    const novoPost = {
      id: Date.now(),
      usuario,
      conteudo: mensagem,
      categoria,
      curtidas: 0,
    }

    setPosts([novoPost, ...posts])
    setMensagem('')
    Swal.fire('Sucesso!', 'Post publicado com sucesso.', 'success')
  }

  const curtirPost = (id) => {
    const atualizados = posts.map((p) =>
      p.id === id ? { ...p, curtidas: p.curtidas + 1 } : p
    )
    setPosts(atualizados)
  }

  const postsFiltrados = posts
    .filter((post) => {
      return (
        (!filtroCategoria || post.categoria === filtroCategoria) &&
        (post.usuario.toLowerCase().includes(busca.toLowerCase()) ||
          post.conteudo.toLowerCase().includes(busca.toLowerCase()))
      )
    })
    .sort((a, b) => {
      if (ordem === 'curtidas') return b.curtidas - a.curtidas
      return b.id - a.id // mais recentes
    })

  const totalPaginas = Math.ceil(postsFiltrados.length / postsPorPagina)
  const inicio = (paginaAtual - 1) * postsPorPagina
  const postsPaginados = postsFiltrados.slice(inicio, inicio + postsPorPagina)

  return (
    <>
      <div className="bg-[#1a1a1a] text-white min-h-screen py-10 px-6">
        <h1 className="text-3xl text-center text-[#2563eb] mb-6 font-bold">Fórum EducAfro</h1>

        {/* Formulário */}
        <div className="max-w-3xl mx-auto mb-10 p-6 bg-[#2a2a2a] rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Seu nome de usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="w-full p-2 mb-4 bg-[#1f1f1f] border border-[#2563eb] rounded text-white"
          />

          <textarea
            placeholder="Escreva sua mensagem (até 500 caracteres)..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            maxLength={500}
            className="w-full h-32 p-2 mb-4 bg-[#1f1f1f] border border-[#2563eb] rounded text-white resize-none"
          ></textarea>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="bg-[#1f1f1f] text-white border border-[#2563eb] rounded px-4 py-2"
            >
              <option value="dúvida">Dúvida</option>
              <option value="sugestão">Sugestão</option>
              <option value="comentário">Comentário</option>
              <option value="disso">Disso</option>
            </select>

            <button
              onClick={handlePostar}
              className="bg-[#2563eb] hover:bg-[#1e40af] transition px-6 py-2 rounded text-white font-semibold flex items-center gap-2"
            >
              <IoSend size={20} /> Enviar
            </button>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 max-w-4xl mx-auto gap-4">
          <div className="flex items-center flex-1 bg-[#2a2a2a] border border-[#2563eb] rounded px-3 py-2 text-white">
            <IoSearch size={20} className="mr-2" />
            <input
              type="text"
              placeholder="Pesquisar por usuário ou palavra-chave"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="bg-transparent w-full outline-none text-white"
            />
          </div>

          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="bg-[#2a2a2a] text-white border border-[#2563eb] rounded px-4 py-2"
          >
            <option value="">Todas as categorias</option>
            <option value="dúvida">Dúvida</option>
            <option value="sugestão">Sugestão</option>
            <option value="comentário">Comentário</option>
            <option value="disso">Disso</option>
          </select>
          <select
            value={ordem}
            onChange={(e) => setOrdem(e.target.value)}
            className="bg-[#2a2a2a] text-white border border-[#2563eb] rounded px-4 py-2"
          >
            <option value="recentes">Mais recentes</option>
            <option value="curtidas">Mais curtidos</option>
          </select>
        </div>

        {/* Lista de Posts */}
        <div className="max-w-4xl mx-auto">
          {postsPaginados.map((post) => (
            <div
              key={post.id}
              className="bg-[#2a2a2a] border border-[#2563eb] rounded-lg p-4 mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-bold text-[#2563eb]">{post.usuario}</span>
                <span className="italic text-gray-400">{post.categoria}</span>
              </div>
              <p className="text-gray-200 break-words whitespace-pre-line mb-2">
                {post.conteudo}
              </p>
              <button
                onClick={() => curtirPost(post.id)}
                className="flex items-center gap-1 text-[#2563eb] hover:text-[#60a5fa] transition"
              >
                <IoHeartOutline size={18} /> {post.curtidas} curtida(s)
              </button>
            </div>
          ))}
        </div>

        {/* Paginação */}
        {totalPaginas > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPaginaAtual(num)}
                className={`px-4 py-2 rounded-full border ${
                  paginaAtual === num
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-[#2a2a2a] text-[#60a5fa] border-[#2563eb] hover:bg-[#1e40af]'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Forum