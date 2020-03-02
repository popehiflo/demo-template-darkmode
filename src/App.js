import React from 'react';
import "./styles/styles.scss";
import Curso from "./Curso";

/* Array de cursos (objetos), lo recorrere para renderizar n veces el componente curso */
const cursos = [
  {
    "titulo": "React Desde Cero",
    "image": "https://www.nauzethdez.com/content/images/size/w2000/2016/06/react-logo.png",
    "price": 30,
    "profesor":"Alexys"
  },
  {
    "titulo":"Flutter Desde Cero",
    "image": "https://cdn.neow.in/news/images/uploaded/2019/07/1562839325_product_28668_product_shots1_story.jpg",
    "price": 40,
    "profesor":"Petter"
  },
  {
    "titulo":"Java Desde Cero",
    
    "price": 50,
    "profesor":"Pool"
  },
  {
    "titulo":"HTML Desde Cero",
    
    "price": 20,
    "profesor":"Dennis"
  }
]

const App = () => (
<>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://eloutput.com/app/uploads-eloutput.com/2019/03/sonic-real-imagen-pelicula.jpg"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Santa Rosa</p>
          <p> Instituto de Educacion Superior Pedagogico</p>
          <a href="https://google.com.pe" className="button">Admision</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    {
      /*Podria usar foreach para recorrer el arreglo, pero en JSX necesito que me devuelva otro arreglo*/
      cursos.map( c => <Curso title={c.titulo} image={c.image} price={c.price} profesor={c.profesor} />)
    }
  </div>
</>
)

export default App;
