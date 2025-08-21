import { Button } from "./Button";
import { motion } from "framer-motion";
// Importa los íconos
import { CheckCircle } from "lucide-react";

// Importa las imágenes desde src/assets
import logo from "../assets/logo.png";
import luui from "../assets/logo.png";

export const Hero = () => {
  return (
    <section className="bg-purple-700 text-white py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-yellow-400 font-bold text-sm tracking-wide uppercase mt-20"
        >
          Ipum dolor boit a met consect
        </motion.p>

        {/* Título principal */}
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          Soluciones <span className="text-yellow-400">visuales y digitales</span> <br />
          para marcas con propósito
        </motion.h1>

        {/* Descripción */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-100 mb-6 max-w-2xl"
        >
          Te ayudamos a construir una presencia visual y digital coherente, moderna y profesional
        </motion.p>

        {/* Lista de beneficios */}
        <motion.ul 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-8 space-y-3 w-full max-w-md"
        >
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-400 animate-bounce w-5 h-5" />
            Lorem ipsum dolor sit amet, consectetur
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-400 animate-bounce delay-200 w-5 h-5" />
            Lorem ipsum dolor sit amet, consectetur
          </li>
        </motion.ul>

        {/* Botones */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            texto="Ver Servicios"
            href="#servicios"
            color="bg-white hover:bg-yellow-400 transition-colors duration-300"
            textoColor="text-purple-700"
          />
          <Button
            texto="Contacto"
            href="#contacto"
            color="border border-white bg-transparent hover:bg-white/20 transition-colors duration-300"
            textoColor="text-white"
          />
        </motion.div>
      </div>

      {/* Imágenes decorativas animadas */}
      <motion.img 
        src={luui}
        alt="Imagen decorativa"
        className="absolute bottom-10 right-10 w-20 rounded-full shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.img 
        src={logo}
        alt="Logo"
        className="absolute top-35 right-20 w-16 rotate-12"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
};
