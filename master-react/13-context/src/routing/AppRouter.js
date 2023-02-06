import React, { useContext } from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {

  const { usuario, setUsuario } = useContext(PruebaContext);
  return (
    <BrowserRouter>
      {/* Menu Navegación */}
      <header className='header'>
        <nav>
          <ul>
            <li><NavLink to="/">Inicio</NavLink> </li>
            <li><NavLink to="/articulos">Articulos</NavLink> </li>
            <li><NavLink to="/acerca-de">Acerca de</NavLink> </li>
            <li><NavLink to="/contacto">Contacto</NavLink> </li>
            {usuario && usuario.hasOwnProperty("username") && usuario.username !== null ?
              (
                <>
                  <li><NavLink to="/">{usuario.username}</NavLink> </li>
                  <li>
                    <a href="#" onClick={e => {
                      e.preventDefault();
                      setUsuario({})
                    }}>Logout</a> </li>
                </>
              ) : (
                <li><NavLink to="/login">Login</NavLink> </li>
              )
            }
          </ul>
        </nav>
      </header>

      {/* Configuración Rutas */}
      <section className='content'>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/acerca-de" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div><h1>Error 404</h1></div>} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}
