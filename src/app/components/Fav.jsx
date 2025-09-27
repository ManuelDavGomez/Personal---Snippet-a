// components/Fav.jsx
"use client";
import { useFavoritos } from "@/app/context/FavContext.js";

const Fav = ({ snippetId }) => {
  const { favoritos, toggleFavorito } = useFavoritos();
  const isFav = favoritos.includes(snippetId);

  return (
    <button
      onClick={() => toggleFavorito(snippetId)}
      className="cursor-pointer"
    >
      {isFav ? "💔 Quitar de favoritos" : "⭐ Agregar a favoritos"}
    </button>
  );
};

export default Fav;
