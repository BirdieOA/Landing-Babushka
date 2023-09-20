"use client";
import Image from "next/image";

export default function Taller() {
  return (
    <>
      <section className="bg-[#86A1B3] bg-Fondo min-h-[800px] py-20" id="taller">
        <div className="grid grid-cols-3 gap-8 px-8 justify-items-center md:flex md:flex-row md:justify-center md:items-center">
          <Image
            src="/card1.svg"
            alt="texto taller 1"
            width="350"
            height="200"
            className="col-span-3"
          />
          <Image
            src="/card2.svg"
            alt="texto taller 2"
            width="350"
            height="200"
            className="col-span-3"
          />
          <Image
            src="/card3.svg"
            alt="texto taller 3"
            width="350"
            height="200"
            className="col-span-3"
          />
        </div>
      </section>
    </>
  );
}
