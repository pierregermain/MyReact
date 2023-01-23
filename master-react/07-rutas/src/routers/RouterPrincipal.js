import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { PanelControl } from '../components/PanelControl';
import { PanelInicio } from '../components/panel/PanelInicio';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { About } from '../components/panel/About';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr/>

      <nav>
        <ul>
          <li>
            <NavLink 
            to="/inicio" 
            className={({isActive}) => { return isActive ? "activado":"";}}
              >Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/contacto"
            className={({isActive}) => { return isActive ? "activado":"";}}
            >Contacto</NavLink>
          </li>
          <li>
            <NavLink to="/articulos"
            className={({isActive}) => { return isActive ? "activado":"";}}
            >Articulos</NavLink>
          </li>
          <li>
            <NavLink to="/persona"
            className={({isActive}) => { return isActive ? "activado":"";}}
            >Persona</NavLink>
          </li>
          <li>
            <NavLink to="/panel"
            className={({isActive}) => { return isActive ? "activado":"";}}
            >Panel de Control</NavLink>
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
        <Route path="/persona/:nombre/:apellido" element={<Persona />} />
        <Route path="/persona/:nombre/" element={<Persona />} />
        <Route path="/persona/" element={<Persona />} />
        <Route path="/ppg/" element={<Navigate to="/persona/pierre/germain" />} />

        {/* Ejemplo de Subcomponente */}
        <Route path="/panel/*" element={<PanelControl />}>
          <Route index element={<PanelInicio />} />
          <Route path="inicio" element={<PanelInicio />} />
          <Route path="crear-articulo" element={<Crear />} />
          <Route path="gestion-usuarios" element={<Gestion />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/*" element={<Error />} />
      </Routes>
      </section>

      <hr/>
      <footer>
        Es es el footer
      </footer>

    </BrowserRouter>
  )
}
