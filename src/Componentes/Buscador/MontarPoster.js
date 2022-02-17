import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movie from './movie.png';
import '../../App.css';

export default class MontarPoster extends Component {
    render() {
        const linea = this.props.linea;
        let img = <img
            src={linea.Poster}
            alt={linea.Title}
            style={{ width: "80%", height: "300px", marginTop: "1rem" }}
        />
        if (linea.Poster === "N/A") {
            console.log("No hay poster");
            img = <img
                src={movie}
                alt={linea.Title}
                style={{ width: "80%", height: "300px", marginTop: "1rem" }}
            />
        }
        return (
            /*<a href={`?id=${linea.imdbID}`} className="card" key={linea.imdbID} >*/ //enrutamiento basico
            <div className="container">
                <Link to={`/detalle/${linea.imdbID}`} key={linea.imdbID}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                {img}
                            </div>
                            <div className="flip-card-back">
                                <h3 className="card-title">{linea.Title}</h3>
                                <h3>{linea.Year}</h3>
                            </div>
                        </div>
                    </div>
                </Link >
            </div>
        )
    }
}