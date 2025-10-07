"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import "../components/stylesco.css";

const Nav = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Cargar estado del sidebar desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved === "true") setCollapsed(true);
  }, []);

  // Guardar estado cada vez que cambia
  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed);
  }, [collapsed]);

  return (
    <>
      {/* SIDEBAR - visible desde md */}
      <aside
        className={`hidden md:flex md:flex-col bg-gray-900 z-99 text-white h-screen fixed left-0 top-0 p-4 space-y-6  ${
          collapsed ? "w-15" : "w-60"
        }`}
      >
        {/* Header + botón colapsar */}
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >
          {!collapsed && (
            <a href="/" className="text-2xl text-white font-bold">
              Snippetía
            </a>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded hover:bg-gray-700 cursor-pointer"
          >
            {collapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            )}
          </button>
        </div>

        {/* Links */}
        <ul className="space-y-5">
          {[
            { href: "/", icon: "🏠", label: "Inicio" },
            { href: "/pages/biblioteca", icon: "📚", label: "Biblioteca" },
            { href: "/pages/favoritos", icon: "⭐", label: "Favoritos" },
            { href: "/pages/agregar", icon: "➕", label: "Agregar" },
          ].map(({ href, icon, label }) => (
            <li key={href} className="relative group">
              <Link
                href={href}
                className={`flex items-center ${
                  collapsed ? "justify-center" : "justify-start space-x-3"
                } hover:text-blue-400`}
              >
                <span>{icon}</span>
                {!collapsed && <span>{label}</span>}
              </Link>

              {/* Tooltip visible solo si está colapsado */}
              {collapsed && (
                <span className="absolute left-full ml-3 bottom-0 top-0 px-3 py-0.5 text-sm bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              )}
            </li>
          ))}
        </ul>

        <section
          className={`text-white block mx-auto px-4 py-2 rounded-lg mt-auto  ${
            collapsed ? "flex items-center justify-center" : "w-full"
          }`}
        >
          {!collapsed && (
            <p className="text-[12px]">
              All rights reserved ©{new Date().getFullYear()}
            </p>
          )}
        </section>
      </aside>

      {/* NAVBAR - solo en móvil */}
      <nav className="md:hidden navbar">
        <label className="navbar-toggle" htmlFor="chkToggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </label>
        <a href="/" className="logo">
          Snippetía
        </a>
        <input type="checkbox" id="chkToggle"></input>
        <ul className="main-nav">
          <li>
            <Link href="/" className="nav-links">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/pages/biblioteca" className="nav-links">
              Biblioteca
            </Link>
          </li>
          <li>
            <Link href="/pages/favoritos" className="nav-links">
              Favoritos
            </Link>
          </li>
          <li>
            <Link href="/pages/agregar" className="nav-links">
              Agregar
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
