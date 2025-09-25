"use client";

import { useState, useEffect } from "react";
import data from "@/app/data/datas.json"; // tu JSON local
import PagesLayout from "@/app/PagesLayout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  const [favoritos, setFavoritos] = useState([]);
  const [snippetsFavoritos, setSnippetsFavoritos] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavoritos(stored);

    // Buscar snippets y añadir el lenguaje de la categoría
    const encontrados = data.categorias.flatMap((cat) =>
      cat.snippets
        .filter((snip) => stored.includes(snip.id))
        .map((snip) => ({
          ...snip,
          language: cat.language, // Añade el lenguaje aquí
        }))
    );

    setSnippetsFavoritos(encontrados);
  }, []);

  return (
    <PagesLayout>
      <h1 className="mb-10 text-3xl">⭐ Mis Favoritos</h1>

      {snippetsFavoritos.length === 0 ? (
        <p>No tienes favoritos todavía</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-7  w-full">
          {snippetsFavoritos.map((snip) => (
            <li key={snip.id} className=" w-full p-5 rounded-2xl bg-[#1E293B]">
              <h2 className="pb-3">{snip.titulo}</h2>
              <SyntaxHighlighter style={coldarkDark} language={snip.language}>
                {snip.codigo}
              </SyntaxHighlighter>
            </li>
          ))}
        </ul>
      )}
    </PagesLayout>
  );
}
