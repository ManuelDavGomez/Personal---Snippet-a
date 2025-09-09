import PagesLayout from "./PagesLayout.jsx";
import FastPng from "@/app/assets/fast.png";
import Image from "next/image.js";
import "./globals.css";

export default function Home() {
  return ( 
    <>
      <PagesLayout>
        <body class="text-gray-900">
          <section class=" text-center">
            <h1 class="text-5xl font-extrabold mb-4">
              Código listo. Problemas resueltos.
            </h1>
            <p class="text-lg mb-6 max-w-2xl mx-auto text-[var(--text-secondary)]">
              SnippetHub es la biblioteca inteligente de snippets, plantillas y
              packs creada para desarrolladores que quieren ahorrar tiempo,
              evitar errores comunes y mantener buenas prácticas.
            </p>
            <section class="space-x-4">
              <a
                href="#"
                class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Empezar gratis
              </a>
              <a
                href="#"
                class="px-6 py-3 rounded-lg border border-gray-300 font-semibold"
              >
                Explorar snippets
              </a>
            </section>
            <p class="mt-4 text-sm text-gray-500">
              Sin tarjeta, acceso inmediato. Exporta a VS Code o GitHub en un
              clic. 
            </p>
          </section>

          <section class="py-70 max-w-5xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-6">
              Lo que necesitas para entregar más rápido
            </h2>
            <p class="text-[var(--text-secondary)]">
              SnippetHub reúne snippets verificados, templates listos y packs
              organizados por stack y caso de uso. Cada fragmento viene con
              descripción, dependencias sugeridas, tests de ejemplo y un sandbox
              donde probar antes de copiar.
            </p> 

            <div class="mt-10">
              <Image
                src={FastPng}
                alt="Imagen representativa de velocidad"
                class="mx-auto animate-levitate"
                width={400}
                height={400}
              />
            </div>
          </section>

          <section class="py-0">
            <h2 class="text-3xl font-bold mb-12 text-center">
              Características destacadas
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div class="p-6  rounded-xl shadow">
                <h3 class="font-semibold mb-2">Playground instantáneo</h3>
                <p>Edita y ejecuta el snippet sin salir de la página.</p>
              </div>
              <div class="p-6  rounded-xl shadow">
                <h3 class="font-semibold mb-2">Copiar con contexto</h3>
                <p>
                  Copia un snippet junto a importaciones y configuración mínima
                  necesaria.
                </p>
              </div>
              <div class="p-6 rounded-xl shadow">
                <h3 class="font-semibold mb-2">Packs y Collections</h3>
                <p>Agrupa snippets en starters para proyectos completos.</p>
              </div>
              <div class="p-6 rounded-xl shadow">
                <h3 class="font-semibold mb-2">Integraciones Editor</h3>
                <p>
                  Guarda y sincroniza desde VS Code o JetBrains con un plugin.
                </p>
              </div>
              <div class="p-6  rounded-xl shadow">
                <h3 class="font-semibold mb-2">Validación y seguridad</h3>
                <p>
                  Linter automático y chequeos de vulnerabilidades para evitar
                  dependencias inseguras.
                </p>
              </div>
              <div class="p-6 rounded-xl shadow">
                <h3 class="font-semibold mb-2">Inteligencia contextual</h3>
                <p>
                  Recomendaciones basadas en tu código (solo si lo autorizas).
                </p>
              </div>
            </div>
          </section>
        </body>
      </PagesLayout>
    </> 
  );
}
