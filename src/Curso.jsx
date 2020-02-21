import React from 'react';


const Curso = props => (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        {/*img necesita dos propiedades para ser renderizada src y alt */}
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          {props.title}
        </h3>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://github.com/popehiflo">{`$ ${props.price}`}</a>
        </div>
      </div>
    </article>
)

export default Curso;