import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

import { ComoTrabajamos } from "../components/secciones/ComoTrabajamos";
import { SeccionValores } from "../components/secciones/SeccionValores";
import { SeccionServicios } from "../components/secciones/SeccionServicios";
import { SeccionPorque } from "../components/secciones/SeccionPorque";
import { SeccionBlog } from "../components/secciones/SeccionBlog";

function Inicio() {
  return (
    <div>
      <Header />
      <Hero />
      <ComoTrabajamos />
      <SeccionValores />
      <SeccionServicios />
      <SeccionPorque />
      <SeccionBlog />
    </div>
  );
}

export default Inicio;
