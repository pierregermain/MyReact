import React from 'react'
import PropTypes from "prop-types";

export const TercerComponente = ({nombre = "Pierre default", libro = "Harry default", ficha}) => {
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <p>{nombre}</p>
        <p>{ficha.estado}</p>
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    ficha: PropTypes.object
}
