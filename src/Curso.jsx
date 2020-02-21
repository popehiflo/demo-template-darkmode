import React from 'react';

//props es el objeto donde se almacenan las propiedades que yo puse en App.js
//Para no recibir todo el objeto props, puedo solo recibir las llaves que necesito
//Cambio props por ({title, image, price})
//Este es un Functional Component, es basicamente un arrow function
const Curso = ({title, image, price, profesor}) => (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img 
          src={image ? image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPxvoy0hvOiEurmgGwx6VExV1MDqDJPDwJZS_AlRtm5IqLxBew"} 
          alt={title ? title : "No hay alt para esta imagen"} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">
          {title ? title : "No hay Titulo!"}
        </h3>
        <div className="s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="path/img" alt="" />
              </div>
            </div>
            <span className="small">{`Prof.: ${profesor}`}</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://github.com/popehiflo">{`$ ${price}`}</a>
        </div>
      </div>
    </article>
)

export default Curso;