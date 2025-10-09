"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Fav from "@/app/components/Fav";
import CopyButton from "@/app/components/CodeCopy.jsx";

const Filter = ({ data }) => {
  const [viewMode, setViewMode] = useState("grid");

  const { id } = useParams();

  // Evitar errores si data no está lista
  if (!data || !data.categorias) {
    return (
      <p className="text-gray-400 text-center mt-10">Cargando snippets...</p>
    );
  }

  // Buscar la categoría según el id de la URL
  const categoria = data.categorias.find((cat) => cat.id === id);

  if (!categoria) {
    return (
      <p className="text-gray-400 text-center mt-10">
        Categoría no encontrada.
      </p>
    );
  }

  const [query, setQuery] = useState("");
  const [filteredSnippets, setFilteredSnippets] = useState(
    categoria.snippets || []
  );

  useEffect(() => {
    setFilteredSnippets(categoria.snippets || []);
  }, [categoria]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = (categoria.snippets || []).filter((s) =>
      s.titulo.toLowerCase().includes(value)
    );

    setFilteredSnippets(filtered);
  };

  return (
    <section className="mt-12 w-full">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Filtrar snippets..."
        className="w-full md:w-[80%] lg:w-[85%] xl:w-[90%] block mx-auto p-2 outline-none border border-gray-700 rounded-lg bg-gray-900 text-white mb-10"
      />

      <article
        className="lg:!block w-full md:w-[80%] lg:w-[85%] xl:w-[90%] mx-auto"
        style={{ display: "none" }}
      >
        <section className="flex justify-end gap-3 mb-4">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1 rounded-lg cursor-pointer ${
              viewMode === "grid"
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-gray-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-1 rounded-lg cursor-pointer ${
              viewMode === "list"
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-gray-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </button>
        </section>
      </article>

    <ul
  className={`w-full grid gap-7 md:w-[80%] lg:w-[85%] xl:w-[90%] mx-auto
    ${
      viewMode === "grid"
        ? "grid-cols-1 lg:grid-cols-2" // grid: 1 col pequeña, 2 col grande
        : "grid-cols-1" // list: siempre 1 col
    }
  `}
>
        {filteredSnippets.map((s) => (
          <li key={s.id || s.titulo} className="p-5 rounded-2xl bg-[#1E293B]">
            <section className="flex items-center justify-between mb-5 gap-3">
              <strong className="text-gray-300">{s.titulo}</strong>
              <CopyButton text={s.codigo} label="Copiar" />
            </section>

            <SyntaxHighlighter
              language={categoria.language}
              style={coldarkDark}
            >
              {s.codigo}
            </SyntaxHighlighter>

            <Fav snippetId={s.id} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Filter;
