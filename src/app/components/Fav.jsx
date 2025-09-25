"use client";
import { useState, useEffect } from "react";

const Fav = ({ snippetId }) => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavoritos(stored);
  }, []);

  const toggleFavorito = () => {
    setFavoritos((prev) => {
      let updated;

      if (prev.includes(snippetId)) {
        // Si ya está → lo quitamos
        updated = prev.filter((id) => id !== snippetId);
      } else {
        // Si no está → lo agregamos
        updated = [...prev, snippetId];
      }

      // Guardar en localStorage
      localStorage.setItem("favoritos", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <button onClick={toggleFavorito} className="cursor-pointer">
      {favoritos.includes(snippetId)
        ? "💔 Quitar de favoritos"
        : "⭐ Agregar a favoritos"}
    </button>
  );
};

export default Fav;
