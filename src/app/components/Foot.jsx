import Image from "next/image";
import React from "react";
import Icon from "@/app/icon1.png";

const Foot = () => {
  return (
    <>
      <footer className=" bg-[var(--background)] text-gray-700 dark:text-gray-200 border-t border-[#314a867d] dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-22 py-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            {/* Brand + short description */}
            <div className="flex-1 min-w-0">
              <a href="/" className="inline-flex items-center gap-3">
                <Image src={Icon} alt="Logo" width={40} height={40} />
                <span className="text-lg font-semibold">Snippetía</span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Snippetía es la biblioteca inteligente de snippets, plantillas y
                packs creada para desarrolladores que quieren ahorrar tiempo,
                evitar errores comunes y mantener buenas prácticas.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2a10 10 0 0 0-3.17 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.2-3.36-1.2-.45-1.14-1.1-1.44-1.1-1.44-.9-.6.07-.6.07-.6 1 .07 1.54 1.03 1.54 1.03.9 1.53 2.36 1.09 2.94.83.09-.64.35-1.09.64-1.34-2.21-.25-4.53-1.1-4.53-4.9 0-1.08.38-1.96 1-2.66-.1-.25-.45-1.26.1-2.62 0 0 .82-.26 2.7 1.02a9.41 9.41 0 0 1 4.92 0c1.88-1.28 2.7-1.02 2.7-1.02.55 1.36.2 2.37.1 2.62.62.7 1 1.58 1 2.66 0 3.8-2.33 4.64-4.55 4.89.36.31.68.92.68 1.86v2.76c0 .26.18.57.69.48A10 10 0 0 0 12 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links grid */}
            <div className="flex-1 gap-6">
              <div>
                <h4 className="text-sm font-semibold">Producto</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    <a className="hover:text-[#0066FF]" href="/">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[#0066FF]" href="/pages/biblioteca">
                      Biblioteca
                    </a>
                  </li>
                       <li>
                    <a className="hover:text-[#0066FF]" href="/pages/favoritos">
                      Favoritos
                    </a>
                  </li>
                       <li>
                    <a className="hover:text-[#0066FF]" href="/pages/agregar">
                      Agregar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Snipettía. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Foot;
