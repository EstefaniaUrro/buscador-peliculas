import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movie from '../Buscador/movie.png';

const API_KEY = 'da130752';
let API_PELI = `http://www.omdbapi.com/?&apikey=${API_KEY}`;

export default class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: {}
        }
        const { id } = this.props.match.params;
        this._leerPelicula(id);
    }

    _leerPelicula = (id) => {
        const ruta = API_PELI + `&i=${id}`
        fetch(ruta)
            .then(res => res.json())
            .then(pelicula => {
                this.setState({ pelicula })
            })
    }

    render() {
        const { Title, Runtime, Poster, Director, Genre, Writer, Actors, Metascore, Plot, Year } = this.state.pelicula;
        let img = <img
            alt={Title}
            src={Poster}
            style={{ height: "300px", marginTop: "1rem" }} />
        if (Poster === "N/A") {
            console.log("No hay poster");
            img = <img
                alt={Title}
                src={movie}
                style={{ width: "200px", height: "300px", marginTop: "1rem" }} />
        }
        return (
            <div className="container">
                <div className="container"
                    style={{
                        backgroundColor: "#f3ecec73",
                        paddingBottom: '20px',
                        margin: "5% 0"
                    }} >
                    <div className="row">
                        <div className="col-10 mt-3">
                            <div className="card" style={{
                                backgroundColor: "transparent", border: '0'
                            }} >
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        {img}
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-title">{Title}</h2>
                                        <div className="card-text">
                                            <div className="grid-container">
                                                <div><b>Año: </b><span>{Year}</span></div>
                                                <div><b>Duración: </b><span>{Runtime}</span></div>
                                                <div><b>Director: </b><span>{Director}</span></div>
                                                <div><b>Escritor: </b><span>{Writer}</span></div>
                                                <div><b>Género: </b> <span>{Genre}</span></div>
                                                <div><b>Critica: </b><span>{Metascore}/100</span></div>
                                                <div><b>Reparto: </b><span>{Actors}</span></div>
                                                <div><b>Argumento: </b><span>{Plot}</span></div>
                                            </div>
                                            <Link to={`/`} >
                                                Volver
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}