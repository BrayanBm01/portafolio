import React from "react";

export const FeatureItem = ({ icon = null, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 px-4 py-8">
      {/* Icono (círculo blanco por defecto) */}
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
        {icon /* Puedes pasar un <svg/> o <img/> aquí */}
      </div>

      <h3 className="text-yellow-300 font-extrabold text-base">
        {title}
      </h3>

      <p className="text-white/90 text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};
