// hooks/useFavoritos.js
"use client";
import { useState, useEffect } from "react";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavoritos(stored);
  }, []); // ✅ solo una vez al montar

  const toggleFavorito = (id) => {
    setFavoritos((prev) => {
      let updated;
      if (prev.includes(id)) {
        updated = prev.filter((favId) => favId !== id);
      } else {
        updated = [...prev, id];
      }
      localStorage.setItem("favoritos", JSON.stringify(updated));
      return updated;
    });
  };

  return { favoritos, toggleFavorito };
}
