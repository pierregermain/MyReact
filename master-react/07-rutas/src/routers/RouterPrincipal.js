import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr/>

      <nav>
        <ul>
          <li>
            <NavLink to="/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
          <li>
            <NavLink to="/articulos">Articulos</NavLink>
          </li>
        </ul>

      </nav>
      <hr/>

      <section className="contenido-principal">
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
