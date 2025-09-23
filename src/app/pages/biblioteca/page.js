"use client";
import { useState } from "react";

import data from "../../data/datas.json";
import PagesLayout from "@/app/PagesLayout";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [copiedId, setCopiedId] = useState(null);

  const copyCode = async (code, id) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <PagesLayout>
      <h1 className="text-3xl font-bold mb-10 text-center">Biblioteca de Snippets</h1>
      <article className="grid gap-6 grid-cols-2 md:grid-cols-4">
        {data.categorias.map((snippet) => (
          <Link key={snippet.id} href={`/pages/biblioteca/${snippet.id}`}>
            <section
              key={snippet.id}
              className="rounded-lg p-4 gap-2 flex flex-row items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              style={{ background: snippet.color }}
            >
              {snippet.logo && (
                <Image
                  src={snippet.logo}
                  alt={`${snippet.nombre} logo`}
                  className=""
                  width={20}
                  height={20}
                />
              )}
              <p className=" !text-white">{snippet.nombre}</p>
            </section>
          </Link>
        ))}
      </article>
    </PagesLayout>
  );
}
