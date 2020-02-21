import React from 'react';

//props es el objeto donde se almacenan las propiedades que yo puse en App.js
//Para no recibir todo el objeto props, puedo solo recibir las llaves que necesito
//Cambio props por ({title, image, price})
const Curso = ({title, image, price, profesor}) => (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        {/*img necesita dos propiedades para ser renderizada src y alt */}
        <img src={image} alt={title} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">
          {title}
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