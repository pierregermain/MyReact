import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
      <h1>Página de Panel de Control</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/panel/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/panel/crear-articulo">Crear artículos</NavLink>
          </li>
          <li>
            <NavLink to="/panel/gestion-usuarios">Gestión usuarios</NavLink>
          </li>
          <li>
            <NavLink to="/panel/about">Acerca de..</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        {/*Carga de Subrutas mediante "Outlet"*/}
        <Outlet />
      </div>
    </div>
  )
}
