"use client";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <section className="min-h-screen mx-auto bg-Imagen bg-[#fecaca] flex flex-col items-center justify-center">
        <Image
          src="/error.svg"
          alt="ilustracion de error"
          width="350"
          height="200"
          className=""
        />
        <a href="/" className="boton">
          Volver
        </a>
      </section>
    </>
  );
}
