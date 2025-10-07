"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Fav from "@/app/components/Fav";
import CopyButton from "@/app/components/CodeCopy.jsx";

const Filter = ({ data }) => {
  const { id } = useParams();

  // Evitar errores si data no está lista
  if (!data || !data.categorias) {
    return <p className="text-gray-400 text-center mt-10">Cargando snippets...</p>;
  }

  // Buscar la categoría según el id de la URL
  const categoria = data.categorias.find((cat) => cat.id === id);

  if (!categoria) {
    return <p className="text-gray-400 text-center mt-10">Categoría no encontrada.</p>;
  }

  const [query, setQuery] = useState("");
  const [filteredSnippets, setFilteredSnippets] = useState(categoria.snippets || []);

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
        className="w-[80%] block mx-auto p-2 border border-gray-700 rounded-lg bg-gray-900 text-white mb-6"
      />

      <ul className="w-full grid grid-cols-1 gap-7 md:w-[80%] lg:w-[85%] xl:w-[90%] mx-auto">
        {filteredSnippets.map((s) => (
          <li key={s.id || s.titulo} className="p-5 rounded-2xl bg-[#1E293B]">
            <section className="flex items-center justify-between mb-5 gap-3">
              <strong className="text-gray-300">{s.titulo}</strong>
              <CopyButton text={s.codigo} label="Copiar" />
            </section>

            <SyntaxHighlighter language={categoria.language} style={coldarkDark}>
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
