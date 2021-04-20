import React, { Component } from 'react';
import Formulario from './Formulario';
import PresentaPelis from './PresentaPelis';

export default class GestorBuscador extends Component {
    state = { resultados: [], buscador: false, cantidad: 0, search: '' }

    _handleContenido = (resultados, cantidad, search) => {
        this.setState({ resultados, buscador: true, cantidad: cantidad, search: search })
    }
    _presentarBusqueda = (resultados) => {
        return this.state.resultados.length !== 0
            ? <PresentaPelis listaPelis={this.state.resultados} cantidad={this.state.cantidad} search={this.state.search} />
            : console.log("No hay nada")
    }

    render() {
        return (
            <div className="container">
                <div className="container">
                    <Formulario entrega={this._handleContenido} />
                    {/* Recibe los datos de el hijo y luego llama a la funcion para sacar los datos  */}
                </div>
                {this.state.buscador
                    ? this._presentarBusqueda(this.state.resultados)
                    : console.log("Indique la pelicula")
                }
            </div>
        )
    }
}
