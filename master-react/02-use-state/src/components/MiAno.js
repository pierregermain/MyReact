import React,{useState} from 'react'
import PropTypes from "prop-types";
import Time from 'react';

export const MiAno = ({ano}) => {

    const [anoNow, setAnoNow] = useState(ano);

    const sumar = (e) => {
        setAnoNow(anoNow+1);
    }
    const restar = (e) => {
        setAnoNow(anoNow-1);
    }
    const cambiarAno = e => {
        let dato = parseInt(e.target.value);
        if(Number.isInteger(dato)){
          setAnoNow(dato);
        }
        else{
            setAnoNow(ano);
        }
    }
  return (
    <div>
    <h2>MiAño Ejercicio con Eventos y useState</h2>
        <strong>
            {anoNow}
        </strong>

        &nbsp;
        <button onClick={sumar}>Sumar año</button>

        &nbsp;
        <button onClick={restar}>Restar año</button>

        &nbsp;
        <input 
        	 onChange={ cambiarAno}
             type="text"
             placeholder='Cambiar año' />

    </div>
  )
}

MiAno.propTypes = {
    ano: PropTypes.number.isRequired,
}

MiAno.defaultProps = {
  ano: new Date().getFullYear(),
}
