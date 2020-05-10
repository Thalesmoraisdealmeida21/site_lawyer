import React from 'react'

import priRecortada from './../../assets/PriRecortada.png'


export default function(){


  function goToAbout(){
      window.scroll({       // 1
        top: document
      .querySelector('#sobre')
        .offsetTop,       // 2
        left: 0,

        behavior: 'smooth'// 3
    });
  }

  return(
    <div className="welcome">


    <div className="textWelcomeContainer">
      <h1>Priscila Morais de Almeida</h1>
      <p>
        Advogada dedicada em atender seus clientes com excelência e comprometimento.
        Especialista em direito civil, das famílias
        e sucessões e em direito previdenciário.
        

        </p>
                  <button onClick={goToAbout} className="btn-custom btn-about-more">Saiba Mais</button>
        


    </div>

    <img src={priRecortada} className="imgPriRecortada" alt=""/>
    </div>
  )
 
}

