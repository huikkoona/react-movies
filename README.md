# 🎬 React Movies – WS5 Full Stack Project

This is my full-stack movie application made for the WS5 assignment.  
I am still a beginner with full stack development, so the project focuses on learning the basics:

- how to build a simple backend API  
- how to create a frontend that connects to that API  
- how to deploy both parts online using Render  

Even as a beginner, I got everything working and learned a lot during this project!

---

## 🚀 Live Links

**Frontend (React):**  
https://react-movies-g2ww.onrender.com

**Backend (API):**  
https://ws5-api.onrender.com/api/movies

---

## 📌 What the App Can Do

The app is simple on purpose so I could focus on the main concepts:

- ✔️ View all movies  
- ✔️ Add a new movie  
- ✔️ Edit a movie  
- ✔️ Delete a movie  
- ✔️ Data stored in MongoDB Atlas  
- ✔️ Frontend and backend connected  

---

## 🧠 Technologies Used

### Frontend
- React + Vite  
- React Router  
- TailwindCSS  
- Fetch API  

### Backend
- Node.js  
- Express  
- MongoDB Atlas  
- Mongoose  

### Deployment
- Render.com 

---

## 📁 Project Structure

```
react-movies/
  src/
    pages/
      Home.jsx
      AddMovie.jsx
      EditMovie.jsx
    api/
      movies.js
    App.jsx
```

Backend is a separate Express project with a Movie model and CRUD routes.

---

## 🌍 Environment Variables

The frontend requires a `.env` file:

```
VITE_API_BASE_URL=https://ws5-api.onrender.com/api
```

---

## 🛠 How to Run Locally

### Backend:
```bash
npm install
npm run dev
```

### Frontend:
```bash
npm install
npm run dev
```

Frontend usually runs at:

```
http://localhost:5173/
```

---

## 📚 What I Learned

As a beginner, I learned:

- how REST APIs work  
- how React fetches and updates API data  
- how to create, update and delete items  
- how MongoDB Atlas works  
- how to deploy both backend and frontend to Render  
- how environment variables work  
- how to debug errors and fix deployment problems  

---

## 🎥 Video Demonstration 

1. Backend health check  
2. Movie list from the API  
3. React frontend showing data  
4. Adding a movie  
5. Editing a movie  
6. Deleting a movie  
7. Deployment on Render  

---

## 🎉 Final Thoughts

Even though I'm still learning, I am proud that everything works correctly.  
This project gave me confidence to build more full-stack applications in the future.
