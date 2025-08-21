
import { SeccionDosColumnas } from "./SeccionDosColumnas";
import { Button } from "../Button";

export const ComoTrabajamos = () => {
  return (
    <SeccionDosColumnas
      izquierda={
        // Figuras moradas (placeholder de imágenes)
        <div className="relative w-full">
          {/* Rectángulo grande */}
          <div className="w-[85%] h-72 md:h-96 bg-purple-700 rounded-2xl mx-auto" />
          {/* Rectángulo pequeño superpuesto */}
          <div className="w-[65%] h-28 md:h-36 bg-purple-700 rounded-2xl absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 shadow-lg" />
        </div>
      }
      derecha={
        <div className="max-w-xl">
          <p className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3">
            <span className="text-purple-700">✔</span>
            CÓMO TRABAJAMOS
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-purple-800 mb-4">
            Procesos claros, resultados personalizados
          </h2>

          <p className="text-gray-700 mb-6">
            Cada proyecto comienza escuchando. Analizamos tu objetivo, estructuramos
            una propuesta clara y te acompañamos hasta el resultado final. Nada
            improvisado, todo diseñado con intención.
          </p>

          <Button
            texto="Ver portafolio"
            href="#portafolio"
            className="bg-purple-700 text-white"
          />
        </div>
      }
      className="bg-white"
    />
  );
};
