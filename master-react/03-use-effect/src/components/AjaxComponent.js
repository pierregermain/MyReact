import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");

    // Rellenar array
    const getUsuariosEstaticos = () => {
        setUsuarios([
            { "id": 1, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://reqres.in/img/faces/7-image.jpg" },
            { "id": 2, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://reqres.in/img/faces/8-image.jpg" },

        ]);
    }
    
    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(resultado_final => {
                setUsuarios(resultado_final.data);
                console.log(usuarios);

            },
            error => {
                alert('No se ha podido obtener los usuarios');            
            }
            )
    }

    const getUsuariosAjaxAW = async() => {

        setTimeout(async() => {
            try{
                const peticion = await fetch("https://reqres.in/apiXXXX/users?page=1");
                const {data} = await peticion.json();

                setUsuarios(data);
                setCargando(false);

            }
            catch(error){
                setErrores(error.message);
                console.log(error.message);
            }

        },2000);
    }

    useEffect(() => {
        //getUsuariosEstaticos();
        //getUsuariosAjaxPms();
        getUsuariosAjaxAW();
    }, []);

    // Plantilla cargando
    if(errores !== ""){
        return (
            <div className="errores">
                Ha ocurrido un error:{errores}
            </div>

        )

    }
    else if(cargando && errores === "") {
        return (
            <div className="cargando">
                Cargando datos...
            </div>

        )
    }
    else if (!cargando && errores === "") {
    // Plantilla cargado
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
}
