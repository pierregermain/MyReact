import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Articulos } from "../components/pages/Articulos";
import { Crear } from "../components/pages/Crear";
import { Inicio } from "../components/pages/Inicio";
import { Footer } from "../components/layout/Footer";
import { Editar } from "../components/pages/Editar";

export const Rutas = () => {
  return (
    <BrowserRouter>

      {/* Layout*/}
      <Nav />

      {/* Contenido central */}
      <section id="content" className="content">
        {/* Contenido */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/edit/:id" element={<Editar />} />
          <Route path="/*" element={<h1>Error 404</h1>} />
        </Routes>
      </section>

      <Sidebar />

      <Footer />

    </BrowserRouter>
  );
}