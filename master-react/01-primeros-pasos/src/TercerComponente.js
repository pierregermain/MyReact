import React from 'react'
import PropTypes from "prop-types";

export const TercerComponente = ({nombre, libro, ficha}) => {
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

TercerComponente.defaultProps = {
  nombre: "Pierre defaultProps",
}
