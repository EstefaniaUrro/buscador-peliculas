import React, { Component } from 'react';
import '../App.css';

class NotFound extends Component {
    goBack = e => {
        e.preventDefault();
        this.props.history.push("/");
    }
    render() {
        return (

            <div className="mainbox" >
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin"></i>
                <div className="err2">4</div>
                <div className="msg">
                    Página NO encontrada<p>Volver al <span onClick={this.goBack}> INICIO</span>.</p>
                </div>
            </div>
        )
    }
}

export default NotFound;