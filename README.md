# 🚀 Task Manager – Full Stack Web Application

A full-stack Task Management application designed to help users organize, manage, and track their daily tasks efficiently.

This project demonstrates full-stack development using modern frontend and backend technologies, database integration, REST APIs, and cloud deployment.

## 🌐 Live Demo

**Frontend:** https://task-manager-mu-black.vercel.app

**Backend API:** https://taskmanager-api-eqzn.onrender.com

## ✨ Features

- 🔐 User Authentication
- 👤 User Account Management
- ➕ Create New Tasks
- 📋 View and Manage Tasks
- ✏️ Update Existing Tasks
- 🗑️ Delete Tasks
- 🔄 Frontend and Backend API Integration
- 🗄️ Database Integration
- ☁️ Cloud Deployment

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS

### Backend
- Python
- Django
- Django REST Framework
- REST APIs

### Database
- PostgreSQL

### Deployment & Tools
- Vercel – Frontend Hosting
- Render – Backend Hosting
- Git & GitHub – Version Control

## 🏗️ Project Architecture

The application follows a client-server architecture.

```text
          User
           |
           v
    React Frontend
       (Vercel)
           |
           | HTTP Requests
           v
    Django REST API
       (Render)
           |
           v
       PostgreSQL
       Database
```

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/deepanshupal-dev/Task-Manager.git
```

```bash
cd Task-Manager
```

### 2. Backend Setup

Navigate to the backend directory.

```bash
cd Backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run database migrations:

```bash
python manage.py migrate
```

Start the development server:

```bash
python manage.py runserver
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend directory.

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## ☁️ Deployment

The application is deployed using:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** PostgreSQL

CORS configuration is used to allow communication between the deployed frontend and backend.

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Full Stack Web Development
- React Component-Based Architecture
- Backend API Development
- Database Connectivity
- Frontend and Backend Integration
- Authentication and Authorization
- CORS Configuration
- Environment Variables
- Git and GitHub
- Cloud Deployment

## 👨‍💻 Developer

**Deepanshu Pal**

Aspiring Full Stack Developer | React.js | Python | Django | PostgreSQL

GitHub: [@deepanshupal-dev](https://github.com/deepanshupal-dev)

---

⭐ If you find this project useful, consider giving it a star!
