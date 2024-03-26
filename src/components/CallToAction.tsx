import React from "react";
import { Button } from "./ui/Button";

export const CallToAction = () => {
  return (
    <section
      className="bg-blue-200 min-h-screen p-5 flex flex-col lg:flex-row justify-center items-center my-5"
      id="calltoaction"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Envíanos mensajes a través de WhatsApp
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Para conocer más acerca de Brújula y que podamos conversar para
          conocerte y comentarte cómo Brújula puede aportar en tus finanzas
          personales y las de tu negocio.
        </p>
        <div className="mt-8">
          <Button />
        </div>
      </div>
    </section>
  );
};
