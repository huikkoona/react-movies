const BASE = import.meta.env.VITE_API_BASE_URL;

export async function getMovies() {
  const res = await fetch(`${BASE}/movies`);
  if (!res.ok) throw new Error("Failed to get movies");
  return res.json();
}

export async function getMovie(id) {
  const res = await fetch(`${BASE}/movies/${id}`);
  if (!res.ok) throw new Error("Failed to get movie");
  return res.json();
}

export async function createMovie(data) {
  const res = await fetch(`${BASE}/movies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create movie");
  return res.json();
}

export async function updateMovie(id, data) {
  const res = await fetch(`${BASE}/movies/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update movie");
  return res.json();
}

export async function deleteMovie(id) {
  const res = await fetch(`${BASE}/movies/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete movie");
  return res.json();
}
