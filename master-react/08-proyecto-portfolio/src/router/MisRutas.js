import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { Inicio } from "../components/Inicio";
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Navegación*/}

      {/* Contenido principal*/}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
      {/* Footer*/}

    </BrowserRouter>
  )
}
