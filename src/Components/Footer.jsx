"use client";
import Image from "next/image";
import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsMailbox2
} from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <section className="bg-[#86A1B3] bg-Fondo flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between items-start  space-x-[500px]">

        </div>{" "}
        <a href="#inicio">
          <Image
            src="/logo3.svg"
            alt="Logo empresarial"
            width="100"
            height="80"
            className="mt-10"
          />
        </a>{" "}
        <div className="flex flex-row justify-center items-center mt-14 mb-10 gap-6 sm:gap-16">
          <a href="https://www.facebook.com/nora.makovitz">
            <BsFacebook
              size={50}
              className="fill-slate-800 hover:fill-[#fecaca] ease-in duration-200 cursor-pointer drop-shadow-lg"
            />
          </a>
          <a href="https://www.instagram.com/babushka.arg/">
            <BsInstagram
              size={50}
              className="fill-slate-800 hover:fill-[#fecaca] ease-in duration-200 cursor-pointer  drop-shadow-lg "
            />
          </a>
          <a href="https://wa.me/5491150076209">
            <BsWhatsapp
              size={50}
              className="fill-slate-800 hover:fill-[#fecaca] ease-in duration-200 cursor-pointer  drop-shadow-lg "
            />
          </a>
          <a href="mailto:nmakovitz@hotmail.com">
            <BsMailbox2
              size={50}
              className="fill-slate-800 hover:fill-[#fecaca] ease-in duration-200 cursor-pointer drop-shadow-lg "
            />
          </a>
        </div>
        <p className="text-center text-xl mb-5 ">Concepto Hexagono 2023</p>
        <div></div>
      </section>
    </>
  );
}
