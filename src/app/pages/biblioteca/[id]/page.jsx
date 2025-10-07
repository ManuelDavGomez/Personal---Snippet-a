import data from "@/app/data/datas.json";
import PagesLayout from "@/app/PagesLayout";
import Link from "next/link";
import Filter from "@/app/components/Filter";

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
      <h2 key={categoria.id} className="!text-gray-500 text-center">
        {categoria.descripcion}
      </h2>

      <Filter data={data} />
    </PagesLayout>
  );
}
