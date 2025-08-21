import React from "react";
import { FeatureItem } from "../FeatureItem";

export const SeccionValores = () => {
  return (
    <section className="bg-purple-700">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Grid de 12 columnas */}
        <div className="grid grid-cols-12 gap-6">
          {/* Item 1 */}
          <div className="col-span-12 md:col-span-4">
            <FeatureItem
              title="Creatividad con intención"
              description="Cada propuesta tiene una razón visual y estratégica."
              icon={null /* ejemplo: <img src="/icons/idea.svg" alt="" /> */}
            />
          </div>

          {/* Item 2 */}
          <div className="col-span-12 md:col-span-4">
            <FeatureItem
              title="Relaciones de confianza"
              description="Escuchamos, acompañamos y entregamos con transparencia."
              icon={null}
            />
          </div>

          {/* Item 3 */}
          <div className="col-span-12 md:col-span-4">
            <FeatureItem
              title="Enfoque a largo plazo"
              description="Creamos soluciones pensadas para crecer contigo."
              icon={null}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
