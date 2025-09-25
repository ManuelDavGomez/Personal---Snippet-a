"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Page = () => {
  const [state, handleSubmit] = useForm("xrbygpvy");

  if (state.succeeded) {
    return (
      <section className="min-h-screen flex items-center justify-center ">
        <section className="bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6">
            ¡Gracias por tu snippet! 🎉
          </h1>
          <p className="text-gray-700">Lo hemos recibido correctamente.</p>
        </section>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center !pt-70 pb-70">
      <secion className="bg-[#1E293B] backdrop-blur-lg rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          ¡Comparte tu Snippet!
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-white">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              required
              autoComplete="off"
              className="mt-1 w-full px-4 py-2 border border-[#3e557a] text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
              placeholder="Tu nombre"
            />
            <ValidationError
              prefix="Nombre"
              field="nombre"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              className="mt-1 w-full px-4 py-2 border border-[#3e557a] text-gray-300  focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
              placeholder="tucorreo@ejemplo.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Tu snippet
            </label>
            <textarea
              name="snippet"
              required
              autoComplete="off"
              rows={6}
              className="mt-1 w-full px-4 py-2 border border-[#3e557a] rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0066ff] font-mono"
              placeholder="Pega aquí tu código..."
            />
            <ValidationError
              prefix="Snippet"
              field="snippet"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full cursor-pointer py-2 px-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0055cc] transition"
          >
            Enviar
          </button>
        </form>
        <p className="mt-6 text-xs text-center text-gray-500">
          Tus snippets serán enviados a nuestro correo y revisados manualmente.
        </p>
      </secion>
    </section>
  );
};

export default Page;
