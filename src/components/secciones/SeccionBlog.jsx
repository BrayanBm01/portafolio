
import { BlogCard } from "../BlogCard";

export const SeccionBlog = () => {
  return (
    <section className="bg-purple-700 py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-10">
          <p className="text-yellow-300 font-bold">Noticias y artículos</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Blog
          </h2>
        </div>

        {/* Grid de 12 columnas */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <BlogCard
              // imagenSrc=""
              titulo="¿Qué es una landing page?"
              descripcion="Una página de aterrizaje tiene un solo objetivo: convertir visitantes en acciones."
              autor="Jaider Avila"
              enlace="#"
            />
          </div>

          <div className="col-span-12 md:col-span-4">
            <BlogCard
              // imagenSrc=""
              titulo="¿Qué es una landing page?"
              descripcion="Una página de aterrizaje tiene un solo objetivo: convertir visitantes en acciones."
              autor="Jaider Avila"
              enlace="#"
            />
          </div>

          <div className="col-span-12 md:col-span-4">
            <BlogCard
              // imagenSrc=""
              titulo="¿Qué es una landing page?"
              descripcion="Una página de aterrizaje tiene un solo objetivo: convertir visitantes en acciones."
              autor="Jaider Avila"
              enlace="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
