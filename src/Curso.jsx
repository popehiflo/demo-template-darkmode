import React from 'react';

const Curso = () => (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://www.nauzethdez.com/content/images/size/w2000/2016/06/react-logo.png" alt="react"/>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          Introduccion a React desde cero
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="http://imagenti.li/Ssr.png" alt="popehiflo"/>
              </div>
            </div>
            <span className="small">popehiflo</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://github.com/popehiflo">$ 20USD</a>
        </div>
      </div>
    </article>
)

export default Curso;