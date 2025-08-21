import { useState } from "react";
import logo from "../assets/logo.png";
import { Button } from "../components/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full shadow fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Wimer Logo" className="h-8" />
        </div>

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold text-gray-800">
          <a href="#inicio" className="hover:text-purple-600">INICIO</a>
          <a href="#quienes-somos" className="hover:text-purple-600">QUIENES SOMOS</a>
          <a href="#servicios" className="hover:text-purple-600">SERVICIOS</a>
          <a href="#planes" className="hover:text-purple-600">PLANES</a>
          <a href="#blog" className="hover:text-purple-600">BLOG</a>
        </nav>

        {/* Botón contacto en desktop */}
        <div className="hidden md:block">
          <Button texto="CONTACTO" href="#contacto" />
        </div>

        {/* Botón menú en móviles */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(true)}
        >
          <Bars3Icon className="h-7 w-7" />
        </button>
      </div>

      {/* Sidebar lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Menú</h2>
          <button onClick={() => setMenuOpen(false)}>
            <XMarkIcon className="h-7 w-7 text-gray-800" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-6 text-sm font-semibold text-gray-800">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>INICIO</a>
          <a href="#quienes-somos" onClick={() => setMenuOpen(false)}>QUIENES SOMOS</a>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>SERVICIOS</a>
          <a href="#planes" onClick={() => setMenuOpen(false)}>PLANES</a>
          <a href="#blog" onClick={() => setMenuOpen(false)}>BLOG</a>
          <Button texto="CONTACTO" href="#contacto" />
        </nav>
      </div>

      {/* Fondo oscuro cuando el menú está abierto */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

    </header>
  );
};
