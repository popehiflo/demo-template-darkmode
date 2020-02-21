import React from 'react';
import "./styles/styles.scss";
import Curso from "./Curso";

const App = () => (
<>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://eloutput.com/app/uploads-eloutput.com/2019/03/sonic-real-imagen-pelicula.jpg"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Catalogo de Cursos</p>
          <p> Ingresa gratis a todos los cursos</p>
          <a href="https://google.com.pe" className="button">Registrate</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    <Curso />
    <Curso />
    <Curso />
    <Curso />
    <Curso />
    <Curso />
    
  </div>
</>
)

export default App;
