import React from 'react';

const curso = {
  "title": "ReactJS desde cero", 
  "image": "https://www.nauzethdez.com/content/images/size/w2000/2016/06/react-logo.png",
  "price": "20 USD"
};

const Curso = () => (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        {/*img necesita dos propiedades para ser renderizada src y alt */}
        <img src={curso.image} alt={curso.title} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          {curso.title}
        </h3>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://github.com/popehiflo">{`$ ${curso.price}`}</a>
        </div>
      </div>
    </article>
)

export default Curso;