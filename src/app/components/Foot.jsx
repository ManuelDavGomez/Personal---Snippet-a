import Image from "next/image";
import React from "react";
import Icon from "@/app/icon1.png";

const Foot = () => {
  return (
    <>
      <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M8 19c7.732 0 11.965-6.4 11.965-11.935 0-.182 0-.364-.013-.545A8.553 8.553 0 0 0 22 4.557a8.19 8.19 0 0 1-2.356.647A4.113 4.113 0 0 0 21.447 3.1a8.224 8.224 0 0 1-2.605.996A4.103 4.103 0 0 0 11.1 7.29a11.64 11.64 0 0 1-8.457-4.287 4.103 4.103 0 0 0 1.27 5.475A4.07 4.07 0 0 1 2 8.753v.052a4.103 4.103 0 0 0 3.291 4.02 4.093 4.093 0 0 1-1.853.07 4.105 4.105 0 0 0 3.833 2.847A8.233 8.233 0 0 1 2 17.542a11.616 11.616 0 0 0 6.29 1.84" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.38.57A3 3 0 0 0 .5 6.2 31.35 31.35 0 0 0 0 12a31.35 31.35 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.13C4.4 20.5 12 20.5 12 20.5s7.6 0 9.38-.57A3 3 0 0 0 23.5 17.8 31.35 31.35 0 0 0 24 12a31.35 31.35 0 0 0-.5-5.8zM9.75 15.02V8.98L16 12l-6.25 3.02z" />
                  </svg>
                </a>

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
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-semibold">Producto</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    <a className="hover:underline" href="#">
                      Características
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Precios
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Novedades
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold">Compañía</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    <a className="hover:underline" href="#">
                      Sobre nosotros
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Carreras
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold">Recursos</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    <a className="hover:underline" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Guías
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Soporte
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter / CTA */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold">Suscríbete</h4>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                Recibe actualizaciones mensuales con lo último y mejores tips.
              </p>

              <p className="mt-4 text-xs text-gray-500">
                Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} MiMarca. Todos los derechos
              reservados.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:underline">
                Política de privacidad
              </a>
              <span className="hidden sm:block">•</span>
              <a href="#" className="hover:underline">
                Términos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Foot;
