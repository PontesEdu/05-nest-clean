# NestJS Clean Architecture

Projeto desenvolvido durante meus estudos de **NestJS** e **Clean Architecture**, baseado no projeto de fórum apresentado pela Rocketseat.

O objetivo principal foi entender como estruturar uma aplicação backend utilizando princípios de **Clean Architecture**, separando regras de negócio, casos de uso e detalhes de infraestrutura.

> 📚 Projeto desenvolvido para fins de estudo e prática de arquitetura de software.

---

## 🚀 Sobre o projeto

A aplicação simula uma plataforma de fórum, permitindo trabalhar com conceitos como criação de perguntas e respostas, notificações e autenticação de usuários.

O foco do projeto não está apenas na implementação das funcionalidades, mas principalmente na organização e separação das responsabilidades dentro da aplicação.

Durante o desenvolvimento, foram explorados conceitos como:

* Clean Architecture
* Domain-Driven Design (DDD)
* Inversão de dependência
* Repository Pattern
* Use Cases
* Entidades e regras de domínio
* Autenticação com JWT
* Hash de senhas
* Validação de dados
* Testes unitários e E2E

---

## 🧠 Conceitos estudados

### Clean Architecture

A aplicação organiza o código em diferentes camadas, buscando manter as regras de negócio independentes de frameworks e detalhes externos.

```text
src/
├── core/
│   ├── entities/
│   ├── errors/
│   ├── events/
│   ├── repositories/
│   └── types/
│
├── domain/
│   ├── forum/
│   └── notification/
│
└── infra/
    ├── auth/
    ├── cryptography/
    ├── database/
    └── http/
```

A estrutura separa principalmente:

* **Core:** conceitos fundamentais e regras compartilhadas da aplicação.
* **Domain:** regras e casos de uso específicos do negócio.
* **Infrastructure:** implementação de banco de dados, autenticação, criptografia e HTTP.

---

## 🛠️ Tecnologias

* **Node.js**
* **TypeScript**
* **NestJS**
* **Prisma**
* **PostgreSQL**
* **Docker / Docker Compose**
* **JWT**
* **Passport**
* **bcrypt**
* **Zod**
* **Vitest**
* **Supertest**
* **ESLint**
* **Prettier**

---

## 📌 Funcionalidades

### Fórum

* Criação de perguntas
* Listagem de perguntas
* Busca de perguntas
* Criação de respostas
* Listagem de respostas
* Comentários e interações relacionadas ao fórum

### Autenticação

* Cadastro de usuários
* Login
* Autenticação utilizando JWT
* Proteção de rotas
* Hash de senhas utilizando bcrypt

### Notificações

* Criação de notificações
* Listagem de notificações
* Marcação de notificações como lidas
* Marcação de notificações como não lidas

---

## 🧪 Testes

O projeto utiliza **Vitest** para testes automatizados.

Para executar os testes:

```bash
npm run test
```

Para executar os testes em modo de desenvolvimento:

```bash
npm run test:watch
```

Para gerar o relatório de cobertura:

```bash
npm run test:cov
```

Os testes E2E podem ser executados com:

```bash
npm run test:e2e
```

---

## ⚙️ Como executar

### Pré-requisitos

Antes de começar, você precisa ter instalado:

* Node.js
* npm
* Docker
* Docker Compose

### 1. Clone o repositório

```bash
git clone https://github.com/PontesEdu/05-nest-clean.git
```

Entre na pasta:

```bash
cd 05-nest-clean
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias para a aplicação.

Exemplo:

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/clean"
JWT_PRIVATE_KEY="your-private-key"
JWT_PUBLIC_KEY="your-public-key"
```

> As variáveis podem variar de acordo com a configuração atual do projeto.

### 4. Inicie o banco de dados

```bash
docker compose up -d
```

### 5. Execute as migrations

```bash
npx prisma migrate dev
```

### 6. Inicie a aplicação

Em ambiente de desenvolvimento:

```bash
npm run start:dev
```

A API estará disponível localmente após a inicialização do NestJS.

---

## 🗄️ Banco de dados

O projeto utiliza **PostgreSQL** como banco de dados e **Prisma ORM** para comunicação com a aplicação.

As migrations ficam armazenadas dentro da pasta:

```text
prisma/
├── migrations/
└── schema.prisma
```

---

## 📁 Organização do projeto

```text
src/
├── core/
│   ├── entities/
│   ├── errors/
│   ├── events/
│   ├── repositories/
│   └── types/
│
├── domain/
│   ├── forum/
│   │   ├── application/
│   │   └── enterprise/
│   │
│   └── notification/
│       ├── application/
│       └── enterprise/
│
└── infra/
    ├── auth/
    ├── cryptography/
    ├── database/
    ├── http/
    ├── app.module.ts
    ├── env.ts
    └── main.ts
```

Essa organização ajuda a manter as regras de negócio desacopladas das implementações externas, facilitando testes, manutenção e evolução da aplicação.

---

## 📖 Objetivos de aprendizado

Este projeto faz parte da minha jornada de estudos em desenvolvimento backend com Node.js e NestJS.

Os principais objetivos foram:

* Aprender NestJS na prática
* Entender Clean Architecture
* Aplicar princípios de DDD
* Trabalhar com casos de uso
* Utilizar interfaces e inversão de dependência
* Implementar autenticação com JWT
* Trabalhar com PostgreSQL e Prisma
* Criar testes unitários e E2E
* Melhorar a organização e manutenção de aplicações backend

---

## 📚 Referência

Projeto desenvolvido como parte dos estudos da formação da **Rocketseat**, utilizando como referência o projeto de fórum apresentado durante o curso.

---

## 👨‍💻 Autor

**Eduardo Pontes**

Desenvolvedor em formação, com foco em desenvolvimento **Full Stack** e interesse especial em backend, arquitetura de software e construção de aplicações escaláveis.

* GitHub: [PontesEdu](https://github.com/PontesEdu)

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e aprendizado.
