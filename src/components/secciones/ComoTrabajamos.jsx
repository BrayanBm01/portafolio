import React, { useRef } from "react";
import { SeccionDosColumnas } from "./SeccionDosColumnas";
import { Button } from "../Button";

import { CheckCircle } from "lucide-react";
import imgGrande from "../../assets/images/como-trabajamos-1.jpg";
import imgPequena from "../../assets/images/como-trabajamos-2.jpg";

export const ComoTrabajamos = () => {
  const contenedorRef = useRef(null);
  const interiorRef = useRef(null);
  const inclinacionMax = 8; // grados de inclinación

  const mover = (e) => {
    // evita en touch
    if (e.pointerType && e.pointerType !== "mouse") return;

    const cont = contenedorRef.current;
    const int = interiorRef.current;
    if (!cont || !int) return;

    const rect = cont.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = (x / rect.width) * 2 - 1;  // -1..1
    const py = (y / rect.height) * 2 - 1;

    const rotX = -(py * inclinacionMax);
    const rotY = (px * inclinacionMax);

    int.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  const salir = () => {
    const int = interiorRef.current;
    if (int) int.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <SeccionDosColumnas
      izquierda={
        <div className="relative w-full">
          <div className="w-[60%] mx-auto relative">

            {/*rectangulo grande*/}
            <div
              ref={contenedorRef}
              className="inclinacion h-72 md:h-96 rounded-2xl"
              onMouseMove={mover}
              onMouseLeave={salir}
              onPointerMove={mover}
              onPointerLeave={salir}
            >
              <div ref={interiorRef} className="inclinacion-interna rounded-2xl overflow-hidden h-full bg-purple-700">
                <img
                  src={imgGrande}
                  alt="Imagen grande"
                  className="w-full h-full object-cover imagen-zoom-suave"
                />
              </div>
            </div>


            <div className="w-2/3 h-28 md:h-36 bg-purple-800 cuadro-pequeno border-8 border-white rounded-2xl overflow-hidden">
              <img
                src={imgPequena}
                alt="Imagen pequeña"
                className="w-full h-full object-cover img-ajustada"
              />
            </div>
          </div>
        </div>
      }
      derecha={
        <div className="max-w-xl">
          <p className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3">
            <CheckCircle className="text-green-400 w-6 h-6" />
           
            CÓMO TRABAJAMOS
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-purple-800 mb-4">
            Procesos claros, resultados personalizados
          </h2>
          <p className="text-gray-700 mb-6">
            Cada proyecto comienza escuchando. Analizamos tu objetivo,
            estructuramos una propuesta clara y te acompañamos hasta el
            resultado final. Nada improvisado, todo diseñado con intención.
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
