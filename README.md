# Todo App

A full-stack Todo application built with **Node.js**, **React**, **PostgreSQL**, and **Docker**. This project demonstrates how to containerize a full-stack application using Docker and Docker Compose for seamless deployment and management.

---

## Features
- **Backend**: RESTful API built with Express.js.
- **Frontend**: Responsive and user-friendly interface built with React.
- **Database**: PostgreSQL for reliable data storage.
- **Docker**: Multi-service orchestration with Docker Compose.

---

## Technologies Used
- **Backend**: Node.js, Express.js, PostgreSQL
- **Frontend**: React.js
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose

---

## Directory Structure
```
todo-app/
├── backend/            # Backend service (Node.js + Express)
│   ├── src/            # Source code
│   │   ├── controllers/ # API logic
│   │   ├── models/      # Database models
│   │   ├── routes/      # API routes
│   │   ├── config/      # Configuration files
│   │   └── index.js     # Entry point
│   ├── package.json     # Dependencies
│   ├── Dockerfile       # Backend Dockerfile
│   └── .dockerignore    # Docker ignore file
├── frontend/           # Frontend service (React)
│   ├── public/          # Static files
│   ├── src/             # Source code
│   │   ├── components/  # React components
│   │   ├── App.js       # Main React component
│   │   ├── index.js     # Entry point
│   │   └── api.js       # API utilities
│   ├── package.json     # Dependencies
│   ├── Dockerfile       # Frontend Dockerfile
│   └── .dockerignore    # Docker ignore file
├── docker-compose.yml  # Docker Compose configuration
└── README.md           # Project documentation
```

---

## Prerequisites
Ensure the following tools are installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/todo-app.git
cd todo-app
```

### 2. Run the Application
Use Docker Compose to build and start the application:
```bash
docker-compose up --build
```
This command will:
- Build the Docker images for the backend, frontend, and database.
- Start the containers for all services.

### 3. Access the Application
- **Frontend**: [http://localhost](http://localhost)
- **Backend API**: [http://localhost:5000/api/todos](http://localhost:5000/api/todos)

---

## Docker Commands

### Build and Start Containers
```bash
docker-compose up --build
```

### Stop Containers
```bash
docker-compose down
```

### View Logs for a Specific Service
```bash
docker-compose logs <service-name>
```
Example:
```bash
docker-compose logs backend
```

### Remove All Containers, Networks, and Volumes
```bash
docker-compose down --volumes --rmi all
```

---

## Environment Variables
The backend requires the following environment variables to connect to the PostgreSQL database. These are defined in the `docker-compose.yml` file:

```yaml
environment:
  DB_USER: user
  DB_PASSWORD: password
  DB_NAME: todos
  DB_HOST: db
  DB_PORT: 5432
```

---

## Project Workflow

### Backend
- Built with Node.js and Express.js.
- Exposes a REST API for managing todos.
- Connects to a PostgreSQL database for CRUD operations.

### Frontend
- Built with React.js.
- Fetches and displays todos from the backend API.
- Allows users to add, update, and delete todos.

### Docker
- The application is containerized using Docker.
- Docker Compose orchestrates the backend, frontend, and database services.
- Multi-stage builds are used to optimize Docker images.

---
