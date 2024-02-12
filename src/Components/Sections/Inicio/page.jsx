"use client"
import Image from "next/image"

export default function Inicio() {
  return (
    <>
      <section className="bg-[#fecaca] bg-Fondo" id="inicio">
        <div>
          <div className="flex flex-col justify-center items-center min-h-[800px] select-none">
            <Image
              src="/logo2.svg"
              alt="Logo empresarial"
              width="200"
              height="80"
              className=""
            />
            <div className="flex flex-row items-center justify-between gap-10">
              <Image
                src="/oiz.svg"
                alt="Logo empresarial"
                width="150"
                height="80"
                className="rotate-45 hidden md:block"
              />
              <h1 className="text-6xl sm:text-8xl text-slate-700 mb-4">
                BABUSHKA
              </h1>

              <Image
                src="/oder.svg"
                alt="Logo empresarial"
                width="150"
                height="80"
                className="-rotate-45 hidden md:block"
              />
            </div>

            <h2 className="text-slate-700 text-2xl  text-center">
              DISEÑOS TEXTILES, BORDADOS Y MUÑECOS.
            </h2>
            <a href="#nosotros" className="boton">
              INGRESAR
            </a>
          </div>
        </div>
      </section>
    </>
  );
}