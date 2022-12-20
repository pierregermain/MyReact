import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);

    // Rellenar array
    const getUsuariosEstaticos = () => {
        setUsuarios([
            { "id": 1, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://reqres.in/img/faces/7-image.jpg" },
            { "id": 2, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://reqres.in/img/faces/8-image.jpg" },

        ]);
    }

    useEffect(() => {
        getUsuariosEstaticos();
    }, []);
    
    return (
    <div>
        <div>Listado usuarios</div>
        <ol className='usuarios'>
            {
                usuarios.map(usuario => {
                return <li key={usuario.id}>{usuario.first_name}</li>;
            })
            }
        </ol>
    </div>
    )
}
