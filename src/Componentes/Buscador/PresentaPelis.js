import React, { Component } from 'react';
import MontarPoster from './MontarPoster';

export default class PresentaPelis extends Component {

    render() {
        const movie = <i className="fas fa-film" style={{ color: 'white' }} ></i>;
        const lista = this.props.listaPelis;
        const search = <p style={{
            textTransform: 'uppercase', fontSize: "20px"
        }
        }> {movie} {this.props.search} {movie}</p >;
        return (
            <div className="container"><br />
                <h3 style={{ width: "100%", color: "white" }}>{search}</h3>
                {lista.map(pelicula => (
                    <div key={pelicula.imdbID}>
                        <MontarPoster linea={pelicula} />
                    </div>
                ))}
            </div>
        )
    }
}
