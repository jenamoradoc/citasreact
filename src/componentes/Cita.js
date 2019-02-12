import React, { Component } from 'react';

class Cita extends Component {

    render(){
        return(
            <div>
                <div>
                    <h3 className="mt-0">Nombre Mascota</h3>
                    <p className="card-text"><span>Nombre del Dueño: </span></p>
                    <p className="card-text"><span>Fecha: </span></p>
                    <p className="card-text"><span>Hora: </span></p>
                    <p className="card-text"><span>Sintomas: </span></p>
                    <p className="card-text"></p>
                </div>
            </div>
        );
    }
}
export default Cita;