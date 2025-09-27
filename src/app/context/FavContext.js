"use client";

import { createContext, useContext, useState, useEffect } from "react";

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavoritos(stored);
  }, []);

  const toggleFavorito = (id) => {
    setFavoritos((prev) => {
      let updated = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];
      localStorage.setItem("favoritos", JSON.stringify(updated));
      return updated;
    });
  };

  const eliminarFav = (id) => {
    setFavoritos((prev) => {
      const updated = prev.filter((f) => f !== id);
      localStorage.setItem("favoritos", JSON.stringify(updated));
      return updated;
    });
  };


  return (
    <FavoritosContext.Provider
      value={{ favoritos, toggleFavorito, eliminarFav }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoritosContext);
