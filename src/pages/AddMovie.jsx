import { useState } from "react";
import { createMovie } from "../api/movies";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    director: "",
    year: "",
    rating: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createMovie(form);
    navigate("/"); // takas homeen
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add Movie</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          name="title"
          placeholder="Title"
          className="border p-2"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="director"
          placeholder="Director"
          className="border p-2"
          value={form.director}
          onChange={handleChange}
        />

        <input
          name="year"
          type="number"
          placeholder="Year"
          className="border p-2"
          value={form.year}
          onChange={handleChange}
        />

        <input
          name="rating"
          type="number"
          placeholder="Rating"
          className="border p-2"
          value={form.rating}
          onChange={handleChange}
        />

        <button className="bg-green-600 text-white p-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
}
