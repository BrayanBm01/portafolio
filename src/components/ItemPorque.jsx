import React from "react";

export const ItemPorque = ({ imagenSrc = "", imagenAlt = "", titulo, descripcion }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 px-4 py-6">
      {/* Avatar circular con respaldo si no hay imagen */}
      <div className="relative w-32 h-32 rounded-full bg-purple-700/90 overflow-hidden ring-8 ring-white">
        {imagenSrc ? (
          <img
            src={imagenSrc}
            alt={imagenAlt}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white/80 text-sm">Sin imagen</span>
          </div>
        )}
      </div>

      <h3 className="text-purple-800 font-extrabold">{titulo}</h3>

      <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
        {descripcion}
      </p>
    </div>
  );
};
