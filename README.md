# Forum API — NestJS & Clean Architecture

A forum API built with **NestJS** and **Clean Architecture**, exploring **DDD, Prisma, PostgreSQL, authentication, and automated testing**.

This project was developed as part of my studies with **Rocketseat**, with a focus on understanding how to structure backend applications using clean architecture principles and domain-driven design.

> 📚 This is a study project focused on learning and practicing backend architecture and development.

---

## 🚀 About

The application simulates a forum platform where users can create questions, post answers, interact with content, and receive notifications.

The main goal of the project is not only to implement the application features, but also to understand how to organize a backend application by separating **business rules from infrastructure and framework-specific implementations**.

---

## 🧠 Concepts

Throughout the project, I explored concepts such as:

* Clean Architecture
* Domain-Driven Design (DDD)
* Use Cases
* Repository Pattern
* Dependency Inversion
* Domain Entities
* Domain Events
* Authentication and authorization
* Automated testing
* Separation of concerns

---

## 🛠️ Tech Stack

* **Node.js**
* **TypeScript**
* **NestJS**
* **Prisma**
* **PostgreSQL**
* **Docker**
* **JWT**
* **Passport**
* **bcrypt**
* **Zod**
* **Vitest**
* **Supertest**
* **ESLint**
* **Prettier**

---

## 🏗️ Architecture

The project follows a Clean Architecture approach, separating the application into different layers.

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

### Core

Contains concepts shared across the application, such as entities, errors, events, repository contracts, and common types.

### Domain

Contains the application's business rules and use cases.

The domain is divided into features such as:

* Forum
* Notifications

### Infrastructure

Contains implementations related to external technologies and frameworks, including:

* HTTP
* Database
* Authentication
* Cryptography
* Prisma

This separation helps keep the business logic independent from infrastructure details.

---

## 📌 Features

### Forum

* Create questions
* List questions
* Search questions
* Create answers
* List answers
* Interact with forum content

### Authentication

* User registration
* User authentication
* JWT-based authentication
* Protected routes
* Password hashing with bcrypt

### Notifications

* Create notifications
* List notifications
* Read notifications
* Mark notifications as unread

---

## 🧪 Testing

The project uses **Vitest** for automated testing.

Run the unit tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate test coverage:

```bash
npm run test:cov
```

Run end-to-end tests:

```bash
npm run test:e2e
```

Automated tests are used to validate the application's business rules and HTTP behavior.

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Docker
* Docker Compose

### 1. Clone the repository

```bash
git clone https://github.com/PontesEdu/05-nest-clean.git
```

Navigate to the project:

```bash
cd 05-nest-clean
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root with the required environment variables.

Example:

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/clean"
JWT_PRIVATE_KEY="your-private-key"
JWT_PUBLIC_KEY="your-public-key"
```

> The required environment variables may vary depending on the current project configuration.

### 4. Start the database

```bash
docker compose up -d
```

### 5. Run database migrations

```bash
npx prisma migrate dev
```

### 6. Start the application

```bash
npm run start:dev
```

---

## 🗄️ Database

The project uses **PostgreSQL** as its relational database and **Prisma** as the ORM.

The Prisma schema and database migrations are located in:

```text
prisma/
├── migrations/
└── schema.prisma
```

---

## 📂 Project Structure

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

The structure is designed to keep **domain rules isolated from external dependencies**, making the application easier to test, maintain, and evolve.

---

## 🎯 Learning Goals

This project is part of my backend development studies and was created to strengthen my understanding of:

* Building APIs with NestJS
* Clean Architecture
* Domain-Driven Design
* SOLID principles
* Dependency Inversion
* Repository Pattern
* Use Case-based application design
* Authentication with JWT
* PostgreSQL and Prisma
* Unit and E2E testing
* Backend project organization

---

## 📚 Reference

This project was developed as part of my studies with **Rocketseat**, based on the forum API project presented in their training.

The implementation was used as an opportunity to practice and better understand backend architecture concepts rather than simply focusing on feature development.

---

## 👨‍💻 Author

**Eduardo Pontes**

Full Stack Developer in training, focused on backend development, software architecture, and building well-structured applications.

* GitHub: [PontesEdu](https://github.com/PontesEdu)

---

## 📄 License

This project was developed for educational purposes as part of my studies.
