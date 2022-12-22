import React from 'react'

export const FormularioComponent = () => {
  return (
    <div>
        <h1>Formularios con react</h1>
        <form>
            <input type="text" placeholder='Nombre'/>
            <input type="text" placeholder='Apellido'/>
            <select>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea placeholder='Biografia'></textarea>

            <input type="submit" value="Enviar" />

        </form>
    </div>
  )
}
