import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GestorBuscador from './Componentes/Buscador/GestorBuscador';
import Detalle from './Componentes/paginas/Detalle';
import Footer from './Componentes/Footer';
import NotFound from './Componentes/NotFound';

function App() {
  return (
    <div>
//       <Switch>
//         <Route exact path='/' component={GestorBuscador} />
//         <Route path='/detalle/:id' component={Detalle} />
//         <Route component={NotFound} />
//       </Switch>
//       <Footer />
    <Router history={browserHistory}>
        <Route exact path='/' component={GestorBuscador} />
        <Route path='/detalle/:id' component={Detalle} />
        <Route path='/notFound' component={NotFound} />
  </Router>
    </div>
  )
}

export default App;
