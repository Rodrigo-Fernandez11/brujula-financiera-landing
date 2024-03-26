import React from "react";
import Image from "next/image";
import ImageBrujula from "../../public/Brújula-Fondo-img.webp";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <section
      className="min-h-screen p-5 flex flex-col lg:flex-row justify-center items-center"
      id="hero"
    >
      <div className="w-full lg:w-1/2 my-2">
        <h2 className="text-4xl md:text-5xl font-bold text-sky-200">
          Bienvenido a Brújula Financiera
        </h2>
        <div className="my-8 space-y-4 text-lg md:text-lg">
          <span className="text-yellow-200">
            Asesoría financiera Personalizada
          </span>
          <p>
            Brújula es una empresa que contribuye al orden y organización
            financiera de las personas y de los negocios. Nos encargamos de que
            puedan registrar sus finanzas personales y los acompañamos a través
            de sesiones de Coaching, a que puedan interpretar estos datos y
            tomar acción en base a su propia información.
          </p>
        </div>
        <Button />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center my-5">
        <Image
          src={ImageBrujula}
          alt="brújula financiera"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
    </section>
  );
};
