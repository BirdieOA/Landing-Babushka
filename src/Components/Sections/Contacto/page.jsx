"use client";
import Image from "next/image";

export default function Contacto() {
  return (
    <>
      <section
        className="bg-[#fecaca] py-10 bg-Fondo flex flex-col items-center justify-center z-[-10]"
        id="contacto"
      >
        <form
          action="https://formsubmit.co/maitedeleonf@gmail.com"
          method="POST"
          className="flex flex-col items-center justify-center z-10 mb-24  rounded-lg px-4 py-4 mt-24"
        >
          <Image
            src="/flor3.svg"
            alt="ilustracion de una flor"
            width="120"
            height="80"
            className="rotate-45 drop-shadow-lg"
          />
          <label htmlFor="Nombre" className=" mt-3 mb-2"></label>
          <input
            type="text"
            className="text-slate-700 bg-[#fecaca] focus:outline-none focus:ring-2 focus:ring-rose-300 rounded-md border-2 text-xl border-[#d87f7f] shadow-lg shadow-[#804040]/50 p-2 placeholder-slate-700"
            id="Nombre"
            name="Nombre"
            required
            autoComplete="true"
            placeholder="Nombre"
          />
          <label htmlFor="Email" className=" mt-3 mb-2"></label>
          <input
            type="Email"
            className="text-slate-700 bg-[#fecaca] focus:outline-none focus:ring-2 border-2 text-xl border-[#d87f7f] focus:ring-rose-300 rounded-md shadow-lg shadow-[#804040]/50 p-2 placeholder-slate-700"
            id="Email"
            name="Email"
            required
            autoComplete="true"
            placeholder="Email"
          />
          <label htmlFor="Comentario" className=" mt-3 mb-2"></label>
          <textarea
            id="Comentario"
            cols="20"
            rows="5"
            className="bg-[#fecaca] rounded-md focus:outline-none focus:ring-2 border-2 text-xl border-[#d87f7f] text-slate-700 p-2 focus:ring-rose-300 shadow-lg shadow-[#804040]/50 placeholder-slate-700 "
            placeholder="Escriba su comentario..."
            name="Comentario"
            required
            autoComplete="true"
          ></textarea>
          <input type="submit" value="ENVIAR" className="boton" />
        </form>{" "}
        <div className="absolute flex flex-row items-center justify-between space-x-[500px] z-0">
          <Image
            src="/hojaiz.svg"
            alt="Ornamento para formulario"
            width="200"
            height="80"
            className="hidden md:block mt-28 drop-shadow-lg"
          />
          <Image
            src="/hojader.svg"
            alt="Ornamento para formulario"
            width="200"
            height="80"
            className="hidden md:block mt-28 drop-shadow-lg"
          />
        </div>
      </section>
    </>
  );
}
