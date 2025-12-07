import { useEffect, useState } from "react";
import { getMovie, updateMovie } from "../api/movies";
import { useParams, useNavigate } from "react-router-dom";

export default function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    director: "",
    year: "",
    rating: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      const data = await getMovie(id);
      setForm({
        title: data.title,
        director: data.director,
        year: data.year,
        rating: data.rating
      });
      setLoading(false);
    }
    loadMovie();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await updateMovie(id, form);
    navigate("/");
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Movie</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="title" className="border p-2" value={form.title} onChange={handleChange}/>
        <input name="director" className="border p-2" value={form.director} onChange={handleChange}/>
        <input name="year" className="border p-2" type="number" value={form.year} onChange={handleChange}/>
        <input name="rating" className="border p-2" type="number" value={form.rating} onChange={handleChange}/>

        <button className="bg-blue-600 text-white p-2 rounded">Save Changes</button>
      </form>
    </div>
  );
}
