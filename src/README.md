# PrimeTrade Backend Assignment

## Features
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Task CRUD APIs
- PostgreSQL Database
- Prisma ORM
- Password Hashing using bcrypt

---

## Tech Stack
- Node.js
- Express.js
- PostgreSQL
- Prisma
- JWT
- bcryptjs

---

## API Endpoints

### Auth Routes

#### Register User
POST /api/v1/auth/register

#### Login User
POST /api/v1/auth/login

---

### Task Routes

#### Create Task
POST /api/v1/tasks/create

#### Get Tasks
GET /api/v1/tasks

#### Update Task
PUT /api/v1/tasks/update/:id

#### Delete Task
DELETE /api/v1/tasks/delete/:id

---

## Setup Instructions

### Install Dependencies

```bash
npm install
```

### Run Server

```bash
npm run dev
```

---

## Environment Variables

Create `.env` file:

```env
DATABASE_URL="postgresql://apple@localhost:5432/taskdb"
JWT_SECRET=mysecretkey
PORT=8000
```

---

## Author
Rohinikanth