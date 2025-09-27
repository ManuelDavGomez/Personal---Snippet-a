"use client";
import { useFavoritos } from "@/app/context/FavContext.js";
import data from "@/app/data/datas.json";
import PagesLayout from "@/app/PagesLayout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/app/components/CodeCopy";

export default function Page() {
  const { favoritos, eliminarFav } = useFavoritos();

  const snippetsFavoritos = data.categorias.flatMap((cat) =>
    cat.snippets
      .filter((snip) => favoritos.includes(snip.id))
      .map((snip) => ({
        ...snip,
        language: cat.language,
      }))
  );

  return (
    <PagesLayout>
      <h1 className="mb-10 text-3xl">⭐ Mis Favoritos</h1>
      {snippetsFavoritos.length === 0 ? (
        <p>No tienes favoritos todavía</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
          {snippetsFavoritos.map((snip) => (
            <li key={snip.id} className="w-full p-5 rounded-2xl bg-[#1E293B]">
              <section className="flex justify-between items-center pb-3">
      
                <CopyButton text={snip.codigo} label="📝 Copiar" />
                <button
                  className="px-3 py-1 text-sm rounded-lg bg-gray-800 text-gray-500 hover:bg-gray-700 transition cursor-pointer"
                  onClick={() => eliminarFav(snip.id)}
                >
                  ❌ Eliminar
                </button>
              </section>

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
