"use client";
import React from "react";
import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      {" "}
      <header className="z-[999] relative">
        <nav className=" bg-[#d87f7f] text-[#fecaca] flex items-center justify-between p-2 shadow-xl fixed mx-auto container">
          {" "}
          <div className="flex">
            <Link href={"/"}>
              <Image
                src="/logo1.svg"
                alt="Logo empresarial"
                width="30"
                height="30"
                loading="lazy"
                className="select-none cursor-pointer drop-shadow-lg"
              ></Image>
            </Link>
          </div>
          <ul className="flex space-x-4 text-2xl select-none">
            <li
              className="text-slate-700 hover:text-[#fecaca] ease-in duration-200 hidden sm:block"
              onClick={closeMenu}
            >
              <a href="#inicio">INICIO</a>
            </li>
            <li
              className="text-slate-700 hover:text-[#fecaca]  ease-in duration-200 hidden sm:block"
              onClick={closeMenu}
            >
              {" "}
              <a href="#nosotros">NOSOTRAS</a>
            </li>
            <li
              className="text-slate-700 hover:text-[#fecaca]  ease-in duration-200 hidden sm:block"
              onClick={closeMenu}
            >
              <a href="#galeria">GALERIA</a>
            </li>
            <li
              href="/Taller"
              className="text-slate-700 hover:text-[#fecaca]  ease-in duration-200 hidden sm:block"
              onClick={closeMenu}
            >
              <a href="#taller">EL TALLER</a>
            </li>
            <li
              className="text-slate-700 hover:text-[#fecaca] ease-in duration-200 hidden sm:block"
              onClick={closeMenu}
            >
              {" "}
              <a href="#contacto">CONTACTO</a>
            </li>
          </ul>
          <div className="cursor-pointer md:hidden " onClick={toggleMenu}>
            {menuOpen ? (
              <HiOutlineX size={40} />
            ) : (
              <HiMenu
                className="fill-[#fecaca] hover:fill-slate-700 ease-in duration-200 drop-shadow-lg"
                size={40}
              />
            )}
          </div>
          {menuOpen && (
            <div className="absolute top-14 left-0 w-full bg-[#d87f7f] text-[#fecaca] px-0 flex flex-col items-center ">
              <ul className="w-full">
                <li className="text-center text-2xl w-full border-t border-[#fecaca]  text-slate-700  hover:text-[#fecaca] hover:bg-[#cf6b6b] ease-in duration-300 py-2">
                  <a href="#inicio" className="" onClick={closeMenu}>
                    INICIO
                  </a>
                </li>
                <li className="text-center text-2xl w-full border-t border-[#fecaca]  text-slate-700  hover:text-[#fecaca]  hover:bg-[#cf6b6b] ease-in duration-300 py-2">
                  <a href="#nosotros" className="" onClick={closeMenu}>
                    NOSOTROS
                  </a>
                </li>
                <li className="text-center text-2xl w-full border-t border-[#fecaca]  text-slate-700 hover:text-[#fecaca]  hover:bg-[#cf6b6b] ease-in duration-300 py-2">
                  <a href="#galeria" className="" onClick={closeMenu}>
                    GALERIA
                  </a>
                </li>
                <li className="text-center text-2xl w-full border-t border-[#fecaca]  text-slate-700 hover:text-[#fecaca]  hover:bg-[#cf6b6b] ease-in duration-300 py-2">
                  <a href="#taller" className="" onClick={closeMenu}>
                    EL TALLER
                  </a>
                </li>
                <li className="text-center text-2xl w-full border-t border-b border-[#fecaca] text-slate-700 hover:text-[#fecaca]  hover:bg-[#cf6b6b] ease-in duration-300 py-2">
                  <a href="#contacto" className="" onClick={closeMenu}>
                    CONTACTO
                  </a>{" "}
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
