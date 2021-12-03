import React from 'react';

export function UsuarioseList() {
    const listado = JSON.parse(localStorage.getItem("listaUsuariose")) || [];
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Nacionalidad</th>
                        <th>Direccion</th>
                        <th>Genero</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      listado.map(usue => <tr>
                          <td>{usue.nom}</td>
                          <td>{usue.apell}</td>
                          <td>{usue.nac}</td>
                          <td>{usue.dir}</td>
                          <td>{usue.gen}</td>
                          <td>{usue.corr}</td>
                          <td>{usue.cel}</td>
                          </tr>
                        )  
                    }
                </tbody>
            </table>
        </>
    )
}