import React from "react";
import { ItemPorque } from "../ItemPorque";
import { Button } from "../Button";

export const SeccionPorque = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-800">
            ¿Por qué escogernos?
          </h2>
        </div>

        {/* Grid 12 columnas (responsivo) */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <ItemPorque
              // imagenSrc=""
              imagenAlt="Experiencia enfocada"
              titulo="Experiencia enfocada"
              descripcion="Más que un servicio, brindamos soluciones prácticas pensadas para marcas reales."
            />
          </div>

          <div className="col-span-12 md:col-span-4">
            <ItemPorque
              // imagenSrc=""
              imagenAlt="Diseño con intención"
              titulo="Diseño con intención"
              descripcion="Cada proyecto nace de un análisis real: nada al azar, todo con propósito."
            />
          </div>

          <div className="col-span-12 md:col-span-4">
            <ItemPorque
              // imagenSrc=""
              imagenAlt="Entrega profesional"
              titulo="Entrega profesional"
              descripcion="Resultados concretos, con orden, claridad y tiempos definidos desde el inicio."
            />
          </div>
        </div>

        {/* Botón CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            texto="Me interesa"
            href="#contacto"
            clase="bg-purple-700 text-white px-6"
          />
        </div>
      </div>
    </section>
  );
};
