"use client";
import Image from "next/image";

export default function Galeria() {
  return (
    <>
      <section
        className="sm:py-20 py-20 bg-[#fecaca] bg-Fondo flex flex-col justify-center items-center min-h-[800px] "
        id="galeria"
      >
        <section className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-4 md:grid-cols-3 gap-6 px-10 py-8">
            <Image
              src="/B1.svg"
              alt="Foto de Muñeca Rusa"
              width="180"
              height="100"
              className="rounded-lg sm:col-span-1 border-2 border-[#d87f7f] shadow-lg shadow-[#804040] col-span-2"
            />
            <Image
              src="/C1.svg"
              alt="Foto de Muñeca Rusa"
              width="180"
              height="100"
              className="rounded-lg col-span-2 sm:col-span-1 border-2 border-[#d87f7f] shadow-lg shadow-[#804040]"
            />
            <Image
              src="/B3.svg"
              alt="Foto de Muñeca Rusa"
              width="180"
              height="100"
              className="rounded-lg sm:col-span-1 border-2 border-[#d87f7f] shadow-lg shadow-[#804040] col-span-2"
            />
            <Image
              src="/M2.svg"
              alt="Foto de cuadro bordado"
              width="180"
              height="100"
              className="rounded-lg sm:col-span-1 border-2 border-[#d87f7f] shadow-lg shadow-[#804040] col-span-2"
            />
            <Image
              src="/C2.svg"
              alt="Foto de cuadro bordado"
              width="180"
              height="100"
              className="rounded-lg sm:col-span-1 border-2 border-[#d87f7f] shadow-lg shadow-[#804040] col-span-2"
            />
            <Image
              src="/C3.svg"
              alt="Foto de cuadro bordado"
              width="180"
              height="100"
              className="rounded-lg sm:col-span-1 border-2 border-[#d87f7f] shadow-lg shadow-[#804040] col-span-2"
            />
            <Image
              src="/M1.svg"
              alt="Foto de bolsa bordada"
              width="180"
              height="100"
              className="rounded-lg  sm:col-span-1 border-2 border-[#d87f7f] shadow-lg shadow-[#804040]  col-span-2"
            />
            <Image
              src="/B2.svg"
              alt="Foto de bolsa bordada"
              width="180"
              height="100"
              className="rounded-lg  sm:col-span-1 border-2 border-[#d87f7f] shadow-lg shadow-[#804040] col-span-2"
            />
            <Image
              src="/M3.svg"
              alt="Foto de bolsa bordada"
              width="180"
              height="100"
              className="rounded-lg sm:col-span-1 border-2 border-[#d87f7f] shadow-lg shadow-[#804040] col-span-2 hidden sm:block "
            />
          </div>
        </section>
        <div className="absolute flex flex-row items-center justify-between space-x-[650px] z-10">
          <Image
            src="/plantaiz.svg"
            alt="Ornamento ilustrado para galeria"
            width="250"
            height="200"
            className="hidden lg:block"
          />
          <Image
            src="/plantade.svg"
            alt="Ornamento ilustrado para galeria"
            width="250"
            height="200"
            className="hidden lg:block"
          />
        </div>
      </section>
    </>
  );
}
