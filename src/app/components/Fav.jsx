// components/Fav.jsx
"use client";
import { useEffect, useState } from "react";

const Fav = ({ snippetId }) => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavoritos(stored);
  }, []); // ✅ solo carga una vez

  const toggleFavorito = () => {
    setFavoritos((prev) => {
      let updated;
      if (prev.includes(snippetId)) {
        updated = prev.filter((id) => id !== snippetId);
      } else {
        updated = [...prev, snippetId];
      }
      localStorage.setItem("favoritos", JSON.stringify(updated));
      return updated;
    });
  };

  const isFav = favoritos.includes(snippetId);

  return (
    <button onClick={toggleFavorito} className="cursor-pointer">
      {isFav ? "💔 Quitar de favoritos" : "⭐ Agregar a favoritos"}
    </button>
  );
};

export default Fav;
