import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

  state = {
    citas: []
  }

  componentDidMount() {
    console.log('Esta Listo');
  }

  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = ( nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita];

    console.log(citas); 

    this.setState({
      citas
    });
  }

  borrarCita = id => {
    console.log(id);
    const citasActuales = [...this.state.citas]; //obtener copia del state
    const citas = citasActuales.filter(cita => cita.id !== id);//borrar el elemento de el state mediante el id
    this.setState({ //actulizar el state
      citas 
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo={'Administrador de Pacientes de Veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;