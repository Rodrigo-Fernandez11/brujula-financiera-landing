import React from "react";
import Image from "next/image";
import gastos from "../../public/gastos.webp";

export const Problems: React.FC = () => {
  return (
    <section
      className="bg-blue-200 min-h-screen py-10 lg:py-20 px-5 flex flex-col lg:flex-row justify-center items-center my-5"
      id="problems"
    >
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Contenido de la izquierda */}
        <div className="lg:w-1/2 lg:pr-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-8">
            ¿Te sientes perdido con tus finanzas?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Muchas personas y negocios enfrentan desafíos financieros que pueden
            causar estrés y preocupación. Algunos de estos desafíos incluyen:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
            <li>Falta de control sobre los gastos y los ingresos.</li>
            <li>
              Dificultad para interpretar los datos financieros y generar
              informes claros.
            </li>
            <li>
              Incertidumbre al planificar y tomar decisiones financieras
              importantes.
            </li>
            <li>
              Miedo a cometer errores financieros que puedan afectar
              negativamente a sus vidas o negocios.
            </li>
            <li>
              Preocupación por no alcanzar sus metas financieras personales o
              empresariales.
            </li>
          </ul>
          <p className="text-lg text-gray-700 mb-10">
            En Brújula entendemos tus preocupaciones y estamos aquí para
            ayudarte a superar estos desafíos. Nos especializamos en
            proporcionar soluciones personalizadas para que puedas tomar el
            control de tus finanzas y alcanzar tus objetivos.
          </p>
        </div>
        {/* Imagen de la derecha */}
        <div className="lg:w-1/2 flex justify-center">
          <div>
            <Image
              src={gastos}
              height={100}
              width={600}
              alt="Gestión Financiera"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
