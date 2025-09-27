"use client";
import { useState, useEffect } from "react";
import data from "@/app/data/datas.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import CopyButton from "./CodeCopy";

export default function Random() {
  const [snippet, setSnippet] = useState(null);
  const [categoria, setCategoria] = useState(null);

  useEffect(() => {
    if (data.categorias && data.categorias.length > 0) {
      // categoría aleatoria
      const randomCategory =
        data.categorias[Math.floor(Math.random() * data.categorias.length)];

      // snippet aleatorio de esa categoría
      const randomSnippet =
        randomCategory.snippets[
          Math.floor(Math.random() * randomCategory.snippets.length)
        ];

      setCategoria(randomCategory);
      setSnippet(randomSnippet);
    }
  }, []);

  if (!snippet || !categoria) return <p>Cargando snippet...</p>;

  return (
    <ul className="w-full">
      <li key={snippet.id} className="p-5 rounded-2xl bg-[#1E293B] w-full">
        <section className="flex items-center justify-between mb-5 gap-3">
          <strong className="text-gray-300 mb-5">{snippet.titulo}</strong>
          {/* 👇 botón que copia el código */}
          <CopyButton text={snippet.codigo} label="Copiar" />
        </section>

        <SyntaxHighlighter language={categoria.language} style={coldarkDark}>
          {snippet.codigo}
        </SyntaxHighlighter>

      </li>
    </ul>
  );
}
