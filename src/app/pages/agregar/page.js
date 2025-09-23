"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Page = () => {
  const [state, handleSubmit] = useForm("xrbygpvy");

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6">
            ¡Gracias por tu snippet! 🎉
          </h1>
          <p className="text-gray-700">Lo hemos recibido correctamente.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          ¡Comparte tu Snippet!
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Tu nombre"
            />
            <ValidationError
              prefix="Nombre"
              field="nombre"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="tucorreo@ejemplo.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tu snippet
            </label>
            <textarea
              name="snippet"
              required
              rows={6}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 font-mono"
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
            className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition"
          >
            Enviar
          </button>
        </form>
        <p className="mt-6 text-xs text-center text-gray-500">
          Tus snippets serán enviados a nuestro correo y revisados manualmente.
        </p>
      </div>
    </div>
  );
};

export default Page;
