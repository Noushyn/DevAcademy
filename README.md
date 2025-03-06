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
Install dependencies:
npm install
Start the application:
npm start

📌 Technologies Used
React (Frontend framework)
React Router DOM (Routing system)
React-Bootstrap (UI components)
Swiper (Carousel/slider)
AOS (Animation on scroll)
Axios (API requests)
SweetAlert2 (User-friendly alerts)
PHP (Backend & database management)

⚠️ Note
This project requires a backend (PHP) and cannot be hosted on GitHub Pages. To run it properly, set up a local development environment.

