🎬 React Movies – WS5 Full Stack Project
This is my full-stack movie application made for the WS5 assignment.
I am still a beginner with full stack development, so the project focuses on learning the basics:
how to build a simple backend API
how to create a frontend that talks to that API
how to deploy both parts online using Render
Even though I’m a beginner, I got everything working and I learned a lot during this project!
🚀 Live Links
Frontend (React):
https://react-movies-g2ww.onrender.com
Backend (API):
https://ws5-api.onrender.com/api/movies
📌 What the App Can Do
The app is very simple on purpose so I could focus on learning.
✔️ View all movies
✔️ Add a new movie
✔️ Edit a movie
✔️ Delete a movie
✔️ Data is saved in MongoDB Atlas
✔️ Frontend + backend work together
🧠 What I Used (Beginner-Friendly)
Frontend
React + Vite (fast and simple setup)
TailwindCSS for styling
React Router for navigation
Fetch API to call my backend
Backend
Node.js + Express
MongoDB Atlas (cloud database)
Mongoose for data models
Deployment
Render.com for both backend and frontend
This was my first time deploying full stack apps, so it took some trial and error!
📁 Project Structure (Easy Overview)
react-movies/
  src/
    pages/        → Home, AddMovie, EditMovie
    api/          → functions that call my backend API
    App.jsx       → routes + layout
Backend is a separate project with an Express server and movie routes.
🌍 Environment Variable
Frontend needs this in .env:
VITE_API_BASE_URL=https://ws5-api.onrender.com/api
This tells React where my backend API lives.
🛠 How to Run the Project Locally
Backend:
npm install
npm run dev
Frontend:
npm install
npm run dev
📚 What I Learned (most important part!)
As a beginner, I learned:
how REST APIs work
how React fetches data from an API
how to send POST / PUT / DELETE requests
how to use MongoDB Atlas
how to deploy both backend and frontend
how environment variables work
how to fix problems when things break 😅
This project really helped me understand how full stack apps work from start to finish.
🎥 Video Demonstration
In the video I will show:
Backend health check
Movie data coming from MongoDB
Full CRUD working in the frontend
Deployment on Render
