import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Articulos } from "../components/pages/Articulos";
import { Inicio } from "../components/pages/Inicio";

export const Rutas = () => {
  return (
    <BrowserRouter>



      <hr />

      <section id="content" className="content">
        {/* Contenido */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />

          <Route path="/*" element={<h1>Error 404</h1>} />
        </Routes>
      </section>

      <hr />
      <footer>
        Es es el footer
      </footer>

    </BrowserRouter>
  );
}