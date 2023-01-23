import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr/>

      <h2>Menu</h2>
      <hr/>

      <section class="contenido-principal">
      {/* Carga de componentes al coincidir con el path*/}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/*" element={<h1>Esta página no existe</h1>} />
      </Routes>
      </section>

      <hr/>
      <footer>
        Es es el footer
      </footer>

    </BrowserRouter>
  )
}
