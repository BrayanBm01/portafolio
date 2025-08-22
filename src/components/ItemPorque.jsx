import { motion } from "framer-motion";
import luuiImg from "../assets/prueva3.jpg"; // importa la imagen

export const ItemPorque = ({ imagenSrc = "", imagenAlt = "", titulo, descripcion }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center  gap-3 px-4 py-6"
      initial={{ opacity: 0, y: 50 }}           // Estado inicial (invisible y desplazado hacia abajo)
      whileInView={{ opacity: 1, y: 0 }}        // Cuando entra en viewport
      transition={{ duration: 0.8, ease: "easeOut" }} // Transición suave
      viewport={{ once: true, amount: 0.3 }}    // Solo una vez, cuando el 30% sea visible
    >
      {/* Avatar circular */}
      <div className="relative w-32 h-32 rounded-full bg-purple-700/90 overflow-hidden ring-8 ring-white">
        {imagenSrc ? (
          <img
            src={imagenSrc}
            alt={imagenAlt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <img
            src={luuiImg}
            alt="Imagen de Luui"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <h3 className="text-purple-800 font-extrabold">{titulo}</h3>

      <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
        {descripcion}
      </p>
    </motion.div>
  );
};
