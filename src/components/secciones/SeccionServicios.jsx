import React from "react";
import { ServiceCard } from "../ServiceCard";

export const SeccionServicios = () => {
  return (
    <section className="bg-purple-700/10 py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título + subtítulo */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-800">
            Elige el servicio que necesitas
          </h2>
          <p className="text-gray-600 mt-2">
            Puedes trabajar solo uno o combinarlos según lo que tu marca necesite.
          </p>
        </div>

        {/* Grid 12 columnas */}
        <div className="grid grid-cols-12 gap-6">
          {/* Tarjeta 1 - col-span 12 en móvil, 6 en md+ */}
          <div className="col-span-12 md:col-span-6 relative">
            {/* Badge/pastilla */}
            <span className="absolute -top-3 left-5 bg-purple-700 text-white text-sm font-bold px-3 py-1 rounded-full shadow">
              Diseño Gráfico
            </span>

            <ServiceCard
              // imageSrc="" // cuando tengas imagen, pásala aquí
              imageAlt="Diseño gráfico"
              features={[
                "Identidad visual profesional",
                "Material para redes y papelería",
                "Propuestas creativas con propósito",
              ]}
              ctaText="Ver más"
              ctaHref="#diseno-grafico"
            />
          </div>

          {/* Tarjeta 2 */}
          <div className="col-span-12 md:col-span-6 relative">
            <span className="absolute -top-3 left-5 bg-purple-700 text-white text-sm font-bold px-3 py-1 rounded-full shadow">
              Desarrollo Web
            </span>

            <ServiceCard
              // imageSrc=""
              imageAlt="Desarrollo web"
              features={[
                "Sitios web personalizados",
                "Diseño adaptable y funcional",
                "Acompañamiento técnico constante",
              ]}
              ctaText="Ver más"
              ctaHref="#desarrollo-web"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
