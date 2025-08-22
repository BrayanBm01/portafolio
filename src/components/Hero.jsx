import { Button } from "./Button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import logo from "../assets/logo.png";
import luui from "../assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left relative z-10">
        
        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-yellow-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4"
        >
          Impulsa tu marca
        </motion.p>

        {/* Título principal */}
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
        >
          Soluciones <span className="text-yellow-400">visuales & digitales</span> <br />
          para marcas con propósito
        </motion.h1>

        {/* Descripción */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed"
        >
          Diseñamos experiencias que conectan, inspiran confianza y transmiten la esencia de tu marca 
          en un entorno digital cada vez más competitivo.
        </motion.p>

        {/* Lista de beneficios */}
        <motion.ul 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-10 space-y-4 w-full max-w-md text-left"
        >
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-400 w-6 h-6" />
            Estrategias digitales personalizadas
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-400 w-6 h-6" />
            Diseño moderno y adaptado a tu audiencia
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-400 w-6 h-6" />
            Optimización para crecer de manera sostenible
          </li>
        </motion.ul>

        {/* Botones */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <Button
            texto="Explorar Servicios"
            href="#servicios"
            color="bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 shadow-md"
            textoColor="text-purple-900 font-semibold"
          />
          <Button
            texto="Hablar con un asesor"
            href="#contacto"
            color="border border-white bg-transparent hover:bg-white/20 transition-all duration-300"
            textoColor="text-white font-medium"
          />
        </motion.div>
      </div>

      {/* Imágenes decorativas animadas */}
      <motion.img 
        src={luui}
        alt="Imagen decorativa"
        className="absolute bottom-16 right-16 w-24 rounded-full shadow-2xl opacity-80"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.img 
        src={logo}
        alt="Logo"
        className="absolute top-24 right-28 w-20 rotate-12 opacity-90"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Sutil gradiente de overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
    </section>
  );
};
