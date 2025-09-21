"use client";
import { useState } from "react";

import data from "../../data/datas.json";
import PagesLayout from "@/app/PagesLayout";
import Link from "next/link";

export default function Page() {
  const [copiedId, setCopiedId] = useState(null);

  const copyCode = async (code, id) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <PagesLayout>
      <article className="grid gap-6 grid-cols-2 md:grid-cols-4">
        {data.categorias.map((snippet) => (
          <Link key={snippet.id} href={`/pages/biblioteca/${snippet.id}`}>
            <section
              key={snippet.id}
              className="rounded-lg p-4"
              style={{ background: snippet.color }}
            >
              <p className=" !text-white">{snippet.nombre}</p>
            </section>
          </Link>
        ))}
      </article>
    </PagesLayout>
  );
}
