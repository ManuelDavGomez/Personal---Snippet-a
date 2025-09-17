import PagesLayout from "./PagesLayout.jsx";
import FastPng from "@/app/assets/fast.png";
import Funcion from "@/app/assets/funcion.png";
import Image from "next/image.js";
import "./globals.css";

export default function Home() {
  return (
    <>
      <PagesLayout>
        <body class="text-gray-900">
          <section class="text-center">
            <h1 class="text-5xl font-extrabold mb-4">
              Código listo. Problemas resueltos.
            </h1>
            <p class="text-lg mb-6 max-w-2xl mx-auto text-[var(--text-secondary)]">
              Snippetía es la biblioteca inteligente de snippets, plantillas y
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

          <section class="pt-70 max-w-5xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-6">
              Lo que necesitas para entregar más rápido
            </h2>
            <p class="text-[var(--text-secondary)]">
              Snippetía reúne snippets verificados, templates listos y packs
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

          <div class="relative w-full overflow-hidden py-30">
            <div class="flex w-max animate-scroll">
              <div class="flex space-x-4 px-4 text-white">
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #javascript
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #react
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #nodejs
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #graphql
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #tailwindcss
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #docker
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #typescript
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #firebase
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #api-rest
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #jwt-auth
                </span>
              </div>
              <div class="flex space-x-4 px-4">
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #javascript
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #react
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #nodejs
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #graphql
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #tailwindcss
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #docker
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #typescript
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #firebase
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #api-rest
                </span>
                <span class="px-5 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg">
                  #jwt-auth
                </span>
              </div>
            </div>

            <div class="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent"></div>
            <div class="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent"></div>
          </div>

          <section class="py-0">
            <h2 class="text-3xl font-bold mb-12 text-center">
              Características destacadas
            </h2>
            <article class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <section class="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="13 19 22 12 13 5 13 19"></polygon>
                    <polygon points="2 19 11 12 2 5 2 19"></polygon>
                  </svg>
                </section>

                <h3 class="font-semibold mb-2">Uso rapido</h3>
                <p>Copia y pega snippets listos para usar.</p>
              </section>

              <section class="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </section>
                <h3 class="font-semibold mb-2">Copiar con un clic</h3>
                <p>Snippets con el código mínimo necesario.</p>
              </section>

              <section class="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                    <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                  </svg>
                </section>
                <h3 class="font-semibold mb-2">Packs y Collections</h3>
                <p>Agrupa snippets por categorías útiles.</p>
              </section>

              <section class="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                  </svg>
                </section>
                <h3 class="font-semibold mb-2">Integración sencilla</h3>
                <p>Conéctalo fácilmente con tu editor.</p>
              </section>

              <section class="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                  </svg>
                </section>
                <h3 class="font-semibold mb-2">Snippets seguros</h3>
                <p>Revisados para evitar errores comunes.</p>
              </section>

              <section class="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </section>
                <h3 class="font-semibold mb-2">Disfruta</h3>
                <p>Espero que te guste y te sea útil.</p>
              </section>
            </article>
          </section>

          <article className="pt-70 pb-[140px]">
            <h2 className="text-3xl font-bold text-center">¿Cómo funciona?</h2>
            <section class="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
              <section>
                <Image
                  src={Funcion}
                  alt="Cómo funciona"
                  width={500}
                  height={300}
                />
              </section>

              <section className="flex flex-col gap-3 text-[var(--text-secondary)]">
                <h2>Buscar o pedir</h2>
                <p>
                  Encuentra snippets por tecnología, caso de uso o popularidad.
                  ¿No está lo que buscas? Solicítalo y lo añadiremos.
                </p>

                <h2>Probar y copiar</h2>
                <p>
                  Prueba snippets en el sandbox integrado. Copia con un clic el
                  código limpio y listo para usar.
                </p>

                <h2>Integrar</h2>
                <p>
                  Usa nuestra extensión para VS Code o GitHub Copilot para
                  insertar snippets directamente en tu flujo de trabajo.
                </p>
              </section>
            </section>
          </article>
        </body>
      </PagesLayout>
    </>
  );
}
