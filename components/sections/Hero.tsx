import React from "react";
import ContainerLayout from "../ContainerLayout";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <div className="sm:w-[40rem] md:w-[50rem] lg:w-[60rem] aspect-square mt-4">
        <ContainerLayout />
      </div>
    </section>
  );
};

export default Hero;
