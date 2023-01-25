import React from 'react';
import { Routes, Route, BrowserRouter, NavLink, Navigate } from 'react-router-dom';
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { Inicio } from "../components/Inicio";
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Navegación*/}
      <HeaderNav />

      {/* Contenido principal*/}
      <section className='content'>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/*" element={<div className='page'><h1 className='heading'>Error 404</h1></div>} />
        </Routes>
      </section>

      {/* Footer*/}
      <Footer />

    </BrowserRouter>
  )
}
