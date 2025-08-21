import React from "react";
import { Button } from "./Button";

export const BlogCard = ({
  imagenSrc = "",
  imagenAlt = "",
  titulo,
  descripcion,
  autor,
  enlace = "#",
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      {/* Imagen con respaldo */}
      <div className="h-40 w-full overflow-hidden">
        {imagenSrc ? (
          <img
            src={imagenSrc}
            alt={imagenAlt}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-purple-100">
            <span className="text-purple-500 text-sm">Sin imagen</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-white font-bold text-base mb-2">{titulo}</h3>
        <p className="text-white/90 text-sm mb-4">{descripcion}</p>

        {/* Autor + Botón */}
        <div className="mt-auto flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm text-white">
            <span className="w-3 h-3 rounded-full bg-white inline-block"></span>
            {autor}
          </span>
          <Button
            texto="Leer más"
            href={enlace}
            className="bg-white text-purple-700 text-sm px-4 py-1"
          />
        </div>
      </div>
    </div>
  );
};
