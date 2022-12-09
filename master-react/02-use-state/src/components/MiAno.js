import React,{useState} from 'react'
import Time from 'react';

export const MiAno = ({ano}) => {

    const [anoNow, setAnoNow] = useState(ano);

    const sumar = (e) => {
        setAnoNow(anoNow+1);
    }
    const restar = (e) => {
        setAnoNow(anoNow-1);
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

    </div>
  )
}
/*
MiAno.propTypes = {
    ano: PropTypes.string.isRequired,
}

MiAno.defaultProps = {
  ano: new Date().getFullYear(),
}
*/