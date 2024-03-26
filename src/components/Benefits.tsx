import Card from "./ui/Card";
import ingresos from "../../public/ingresos.webp";
import constevida from "../../public/costevida.webp";
import ordenfinanzas from "../../public/ordenfinanzas.webp";
import planifica from "../../public/planifica.webp";

export const Benefit: React.FC = () => (
  <section
    className="min-h-screen py-10 lg:py-20 px-5 flex flex-col justify-center items-center my-5"
    id="benefits"
  >
    <div className="container mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
        Beneficios Principales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          img={ingresos}
          title="Aumentar tus ingresos y minimizar tus gastos"
          description="El principal beneficio es que puedas tomar conciencia del vínculo que estás teniendo con tu dinero."
        />
        <Card
          img={ordenfinanzas}
          title="Lograr que tus finanzas estén ordenadas"
          description="Podrás conocer en qué estás gastando y cómo estás generando dinero."
        />
        <Card
          img={constevida}
          title="Conocer tu costo de vida"
          description="Lograrás pagarte un sueldo como emprendedor, separando el dinero del negocio de lo personal."
        />
        <Card
          img={planifica}
          title="Planificar, prevenir, construir un patrimonio financiero"
          description="Con una buena planificación y prevención, podrás construir un patrimonio financiero sólido."
        />
      </div>
    </div>
  </section>
);
