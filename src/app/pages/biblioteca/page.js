"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const snippets = [
  {
    id: 1,
    title: "Copiar al portapapeles",
    description: "Un simple copia",
    code: 'navigator.clipboard.writeText("Texto a copiar");',
    language: "javascript",
    tags: ["inicio", "javascript", "básico"],
  },
  {
    id: 2,
    title: "Comprobar si un objeto está vacío",
    description: "Una función que comprueba si un objeto está vacío.",
    code: "Object.keys(obj).length === 0;",
    language: "javascript",
    tags: ["función", "javascript", "básico"],
  },
  {
    id: 3,
    title: "Generar un número aleatorio en un rango",
    description:
      "Una función que genera un número aleatorio entre dos valores.",
    code: "const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;",
    language: "javascript",
    tags: ["función", "javascript", "básico"],
  },
  {
    id: 4,
    title: "Hola Mundo en Python",
    description: "Un simple programa que imprime 'Hola Mundo' en Python.",
    code: `const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello World"));
app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));`,
    language: "python",
    tags: ["función", "python", "básico"],
  },
];

export default function Page() {
  const [copiedId, setCopiedId] = useState(null);

  const copyCode = async (code, id) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="border rounded-lg shadow bg-[##00091A] border-blue-900 p-4"
        >
          <h2 className="text-lg font-bold">{snippet.title}</h2>
          <p className="text-sm text-gray-600 mb-2">{snippet.description}</p>

          <div className="relative">
            <button
              onClick={() => copyCode(snippet.code, snippet.id)}
              className="absolute right-2 top-2 px-2 py-1 text-xs bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              {copiedId === snippet.id ? "✅ Copiado" : "📋 Copiar"}
            </button>

            <SyntaxHighlighter
              language={snippet.language.toLowerCase()}
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                padding: "16px",
                fontSize: "14px",
              }}
            >
              {snippet.code}
            </SyntaxHighlighter>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {snippet.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-200 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
