
📚 Projeto EducAfro – Versão Mínima (Nível Inicial)
🌍 Proposta
Este projeto tem como objetivo apresentar uma plataforma educacional voltada à valorização da cultura negra, com cursos gratuitos, conteúdos culturais e acesso à arte afrocentrada. Ele cumpre os requisitos mínimos de um sistema com separação entre back-end e front-end, mesmo que não integrados, e está alinhado aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU, especialmente no eixo da educação de qualidade e igualdade racial.

🖥️ Front-end
✅ Tecnologias utilizadas:
React.js – Estrutura principal do front-end

React Icons – Ícones modernos para o design da interface

SweetAlert2 (SweetAlert) – Alertas personalizados e acessíveis

FormSubmit – Serviço externo usado para envio de mensagens via formulário de contato

Museu de Arte de Chicago API – Integração com acervo de arte para enriquecer o conteúdo cultural

gh-pages – Utilizado para fazer o deploy do site no GitHub Pages

⚙️ Funcionalidades implementadas:
Página inicial com destaque para cursos e cultura

Lista de cursos disponíveis

FAQ e contato com formulário funcional

Blog com posts sobre cultura e tecnologia negra

Categorias e arquivo do blog

Integração com a API do Museu de Arte de Chicago

Deploy do site estático com gh-pages

🧠 Back-end
✅ Tecnologias utilizadas:
Java (JDK 17+)

Orientação a Objetos

JDBC (Java Database Connectivity)

MySQL – Banco de dados relacional

Eclipse IDE

📦 Estrutura do projeto Java:

src/
├── main/          → Menu principal com navegação via console
├── model/         → Entidades: Usuario e Curso
├── dao/           → DAOs com operações CRUD completas
└── database/      → Classe ConnectionFactory para conectar ao MySQL


⚙️ Funcionalidades implementadas:
CRUD completo via console para duas entidades:

Usuario: cadastrar, listar, buscar, atualizar e excluir

Curso: cadastrar, listar, buscar, atualizar e excluir

Menu interativo com Scanner

Persistência dos dados em banco relacional (MySQL)

🔧 Como executar o back-end (Java):
Clone o projeto ou importe no Eclipse como um projeto Java

Configure seu MySQL com:

sql
Copiar
Editar
CREATE DATABASE educafrodb;
USE educafrodb;

CREATE TABLE usuario (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  email VARCHAR(100)
);

CREATE TABLE curso (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100),
  descricao TEXT
);
Atualize o arquivo ConnectionFactory.java com seu usuário e senha MySQL

Rode a classe Main.java com o menu no console

🌐 Como executar o front-end (React):
bash
Copiar
Editar
# Instale as dependências
npm install

# Rode localmente
npm run dev

# Ou faça o deploy
npm run deploy

🧠 Autor
Desenvolvido por Pedro Henrique Bento Martins, estudante de Engenharia de Software apaixonado por design, tecnologia, cultura negra e educação.

