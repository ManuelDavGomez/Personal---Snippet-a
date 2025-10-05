import data from "@/app/data/datas.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import PagesLayout from "@/app/PagesLayout";
import CopyButton from "@/app/components/CodeCopy.jsx"; // 👈 importamos el botón
import Link from "next/link";
import Fav from "@/app/components/Fav";

export function generateStaticParams() {
  return data.categorias.map((snippet) => ({
    id: snippet.id,
  }));
}

export default function Page({ params }) {
  const categoria = data.categorias.find((c) => c.id === params.id);
  if (!categoria) {
    return <div>Categoría no encontrada</div>;
  }
  return (
    <PagesLayout>
      <Link
        href="/pages/biblioteca"
        className="text-blue-500 hover:underline mb-20 inline-block"
      >
        &larr; Volver a la biblioteca
      </Link>
  
        
        <h1 className="text-3xl font-bold mb-3">{categoria.nombre}</h1>
        <h2 key={categoria.id} className="!text-gray-500">
          {categoria.descripcion}
        </h2>
   

      <section className="mt-12 w-full">
        <ul className="w-full grid grid-cols-1 gap-7 md:w-[80%] lg:w-[85%] xl:w-[90%] mx-auto">
          {categoria.snippets.map((s) => (
            <li key={s.id} className="p-5 rounded-2xl bg-[#1E293B]">
              <section className="flex items-center justify-between mb-5 gap-3">
                <strong className="text-gray-300">{s.titulo}</strong>
                {/* 👇 botón que copia el código */}
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
    </PagesLayout>
  );
}
