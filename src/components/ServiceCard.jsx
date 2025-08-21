import React from "react";
import { Button } from "./Button";

export const ServiceCard = ({
  badge = "",                // Texto del pill arriba (p.ej., "Diseño Gráfico")
  imageSrc = "",             // Opcional: URL de la imagen
  imageAlt = "",
  features = [],             // Array de strings
  ctaText = "Ver más",
  ctaHref = "#",
}) => {
  return (
    <div className="bg-white rounded-2xl border border-purple-200 shadow-sm p-4">
      {/* Imagen (fallback si no hay) */}
      <div className="rounded-xl overflow-hidden mb-4 border border-purple-200">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-44 object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        ) : (
          <div className="w-full h-44 bg-purple-100 flex items-center justify-center">
            <span className="text-purple-500 text-sm">Imagen del servicio</span>
          </div>
        )}
      </div>

      {/* Lista de beneficios */}
      <ul className="space-y-2 mb-4">
        {features.map((txt, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
            <span className="mt-0.5 inline-flex w-5 h-5 items-center justify-center rounded-full bg-purple-600 text-white text-xs">✔</span>
            <span>{txt}</span>
          </li>
        ))}
      </ul>

      <Button
        texto={ctaText}
        href={ctaHref}
        className="bg-purple-700 text-white w-full md:w-auto"
      />
    </div>
  );
};
