import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Articulos } from "../components/pages/Articulos";
import { Inicio } from "../components/pages/Inicio";
import { Footer } from "../components/layout/Footer";

export const Rutas = () => {
  return (
    <BrowserRouter>

      {/* Layout*/}
      <Header />
      <Nav />

      {/* Contenido central */}
      <section id="content" className="content">
        {/* Contenido */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/*" element={<h1>Error 404</h1>} />
        </Routes>
      </section>

      <Sidebar />

      <Footer />

    </BrowserRouter>
  );
}