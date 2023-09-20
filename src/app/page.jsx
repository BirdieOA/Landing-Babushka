"use client";
import Contacto from "@/Components/Sections/Contacto/page";
import Galeria from "@/Components/Sections/Galeria/page";
import Nosotras from "@/Components/Sections/Nosotras/page";
import Taller from "@/Components/Sections/Taller/page";
import Inicio from "@/Components/Sections/Inicio/page";

export default function HomePage() {
  return (
    <>
      <Inicio />
      <Nosotras />
      <Galeria />
      <Taller />
      <Contacto />
    </>
  );
}
