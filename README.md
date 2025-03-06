# DevAcademy

A **frontend-focused** web application for programming courses and articles, built with **React, React Router DOM, and React-Bootstrap**. The backend is powered by **PHP**, while data is fetched from external APIs using **Axios**.

## 🚀 Features

### 🏠 Home Page
- **Hero Section**: Displays statistics about students, articles, and projects. The numbers animate from zero to the actual value using **AOS** and **HeroBox**.
- **Latest Courses & Articles**: Showcases the most recent courses and articles in a **Swiper** carousel.

### 📝 Articles Management
- **Add New Articles**: Users can create new articles by filling out input fields in the `/create-article` route.
- **View & Manage Articles**:
  - Articles are displayed in the `/articles` route.
  - Click "Read More" to view the full article.
  - Edit or delete articles directly from the article page.
  - Uses **Axios** with `GET`, `POST`, and `PUT` methods to interact with the **real PHP database**.
- **Filters & Search**:
  - Filter by **longest, shortest, newest, and oldest** articles.
  - Search by **author name**.

### 🎓 Courses Management
- **Search Courses**: Users can search courses by instructor name.
- **Category Filters**: Filter courses by **Frontend** or **Backend**.
- **Course Status Filters**:
  - `Completed`
  - `Pre-sale`
  - `In Progress`

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Noushyn/DevAcademy.git
   cd DevAcademy

## 📌 Technologies Used
- **Frontend**:
  - ![React](https://img.shields.io/badge/React-18.3.1-blue)
  - ![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-7.0.2-blue)
  - ![React-Bootstrap](https://img.shields.io/badge/React--Bootstrap-2.10.7-blue)
  - ![Swiper](https://img.shields.io/badge/Swiper-11.2.0-orange)
  - ![AOS](https://img.shields.io/badge/AOS-2.3.4-green)

- **Backend**:
  - ![PHP](https://img.shields.io/badge/PHP-Server--Side-purple)

- **API & Data Handling**:
  - ![Axios](https://img.shields.io/badge/Axios-1.7.9-yellow)

- **UI Enhancements**:
  - ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-11.15.2-red)


⚠️ Note
This project requires a backend (PHP) and cannot be hosted on GitHub Pages. To run it properly, set up a local development environment.

