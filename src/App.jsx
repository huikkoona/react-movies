import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>
    </BrowserRouter>
  );
}
