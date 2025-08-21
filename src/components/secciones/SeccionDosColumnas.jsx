
export const SeccionDosColumnas = ({ izquierda, derecha, className = "" }) => {
  return (
    <section className={`w-full py-16 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">{izquierda}</div>
        <div className="flex-1">{derecha}</div>
      </div>
    </section>
  );
};
