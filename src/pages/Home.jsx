import { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../api/movies";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadData() {
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (err) {
      setError("Failed to load movies");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleDelete(id) {
    await deleteMovie(id);
    loadData();
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Movies</h1>

      <a
        href="/add"
        className="inline-block mb-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Movie
      </a>

      <div className="flex flex-col gap-4">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="p-4 bg-white shadow rounded flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold">{movie.title}</h2>
              <p className="text-gray-600">{movie.director}</p>
              <p className="text-sm text-gray-400">{movie.year}</p>
              <p>⭐ {movie.rating}</p>
            </div>

            <div className="flex gap-2">
              <a
                href={`/edit/${movie._id}`}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Edit
              </a>

              <button
                onClick={() => handleDelete(movie._id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
