"use client";
import Image from "next/image";

export const metadata = {
  title: "Nosotras"
};

export default function Nosotras() {
  return (
    <>
      <section className=" bg-[#86A1B3] bg-Fondo h-auto" id="nosotros">
        <div className=" flex flex-col items-center justify-center mx-auto px-4 sm:w-[500px] lg:w-[950px] py-20">
          <Image
            src="/nosotras.svg"
            alt="Presentacion, tarjeta nosotras."
            width="950"
            height="100"
            className="hidden md:block"
          />
          <Image
            src="/nosotras2.svg"
            alt="Presentacion, tarjeta nosotras."
            width="950"
            height="100"
            className="md:hidden"
          />
        </div>
      </section>
    </>
  );
}
