"use client";
import PagesLayout from "./PagesLayout.jsx";
import FastPng from "@/app/assets/fast.png";
import Funcion from "@/app/assets/funcion.png";
import Image from "next/image.js";
import Random from "./components/Random.jsx";
import "./globals.css";

export default function Home() {
  return (
    <>
      <PagesLayout>
        <body className="text-gray-900">
          <section className="text-center">
            <h1 className="text-5xl font-extrabold mb-4">
              Código listo. Problemas resueltos.
            </h1>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-[var(--text-secondary)]">
              Snippetía es la biblioteca inteligente de snippets, creada para
              desarrolladores que quieren ahorrar tiempo, evitar errores comunes
              y mantener buenas prácticas.
            </p>
            <section className="space-x-4">
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Empezar gratis
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-lg border border-gray-300 font-semibold"
              >
                Explorar snippets
              </a>
            </section>
            <p className="mt-4 text-sm text-gray-500">
              Sin tarjeta, acceso inmediato. Copia a VS Code en un clic.
            </p>
          </section>

          <section className="pt-70 max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Lo que necesitas para entregar más rápido
            </h2>
            <p className="text-[var(--text-secondary)]">
              Snippetía reúne snippets, organizados. Cada fragmento viene con
              descripción y etiquetas para encontrarlo fácil. Pruébalos y me
              dices qué te parece.
            </p>

            <div className="mt-10">
              <Image
                src={FastPng}
                alt="Imagen representativa de velocidad"
                className="mx-auto animate-levitate"
                width={400}
                height={400}
              />
            </div>
          </section>

          <div className="relative w-full overflow-hidden py-30">
            <div className="flex w-max animate-scroll">
              <div className="flex space-x-4 px-4 text-white">
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #javascript
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #react
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #nodejs
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #graphql
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #tailwindcss
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #docker
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #typescript
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #firebase
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #api-rest
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #jwt-auth
                </span>
              </div>
              <div className="flex space-x-4 px-4">
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #javascript
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #react
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #nodejs
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #graphql
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #tailwindcss
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #docker
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #typescript
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #firebase
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #api-rest
                </span>
                <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#0B1223] border border[var(--border-color)] text-white shadow-lg">
                  #jwt-auth
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent"></div>
          </div>

          <section className="py-0">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Características destacadas
            </h2>
            <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <section className="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 19 22 12 13 5 13 19"></polygon>
                    <polygon points="2 19 11 12 2 5 2 19"></polygon>
                  </svg>
                </section>

                <h3 className="font-semibold mb-2">Uso rapido</h3>
                <p>Copia y pega snippets listos para usar.</p>
              </section>

              <section className="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </section>
                <h3 className="font-semibold mb-2">Copiar con un clic</h3>
                <p>Snippets con el código mínimo necesario.</p>
              </section>

              <section className="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                    <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                  </svg>
                </section>
                <h3 className="font-semibold mb-2">Organización</h3>
                <p>Los snippets están organizados por categorías útiles.</p>
              </section>

              <section className="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                  </svg>
                </section>
                <h3 className="font-semibold mb-2">Integración sencilla</h3>
                <p>Copialo fácilmente a tu editor.</p>
              </section>

              <section className="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                  </svg>
                </section>
                <h3 className="font-semibold mb-2">Snippets seguros</h3>
                <p>Revisados para evitar errores comunes.</p>
              </section>

              <section className="p-6 rounded-xl shadow border-double border-4 border-[var(--border-color)] bg-[#0B1223]">
                <section className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0066FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </section>
                <h3 className="font-semibold mb-2">Disfruta</h3>
                <p>Espero que te guste y te sea útil.</p>
              </section>
            </article>
          </section>

          <section className="mt-50 w-[100%] sm:w-[90%]">
            <h2 className="text-3xl font-bold text-center mb-12">Tu Snippet Random</h2>
            <Random />
          </section>

          <article className="pt-70 pb-[140px]">
            <h2 className="text-3xl font-bold text-center">¿Cómo funciona?</h2>
            <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
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
                  Prueba snippets. Copia con un clic el código limpio y listo
                  para usar.
                </p>

                <h2>Integrar</h2>
                <p>
                  Pega el snippet en tu proyecto. Ahorra tiempo y evita errores
                </p>
              </section>
            </section>
          </article>
        </body>
      </PagesLayout>
    </>
  );
}
