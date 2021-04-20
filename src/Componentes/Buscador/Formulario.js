import React, { Component } from 'react';
const API_KEY = 'da130752';
let API_PELI = `http://www.omdbapi.com/?&apikey=${API_KEY}`;

export default class Formulario extends Component {
    state = {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        const { inputMovie } = this.state;
        const ruta = API_PELI + `&s=${inputMovie}`
        fetch(ruta)
            .then(res => res.json())
            .then(
                (results) => {
                    const { Response = "", Search = [], totalResults } = results;
                    if (Response !== "False") {
                        this.props.entrega(Search, totalResults, inputMovie);
                    } else {
                        this.props.entrega(Search, totalResults);
                    }
                }
            )
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h3>Buscador de Peliculas</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "40%" }}>
                    <form className="form-inline" onSubmit={this._handleSubmit}>
                        <input className="form-control"
                            type="search"
                            placeholder="Título de la pelicula"
                            onChange={this._handleChange} />
                        <button className="btn btn-outline-success" type="submit" style={{ height: "95%" }}>
                            <img src="https://img.icons8.com/ios-glyphs/24/000000/search.png" style={{ marginTop: "-6px" }} alt="search" />
                        </button>
                    </form>
                </div>
            </nav>
        )
    }
}