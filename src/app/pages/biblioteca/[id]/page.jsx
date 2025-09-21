import data from "@/app/data/datas.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import PagesLayout from "@/app/PagesLayout";

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
      <h1 className="text-3xl font-bold">{categoria.nombre}</h1>

      <ul>
        <li key={categoria.id}>{categoria.descripcion}</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">Snippets:</h2>
      <section>
        <ul className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {categoria.snippets.map((s) => (
            <li key={s.id} className="p-5 rounded bg-[#1E293B]">
              <strong>{s.titulo}</strong>

              <SyntaxHighlighter language={s.languaje} style={vscDarkPlus} >
                {s.codigo}
              </SyntaxHighlighter>
            </li>
          ))}
        </ul>
      </section>
    </PagesLayout>
  );
}
