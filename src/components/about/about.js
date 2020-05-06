import React from 'react'
import imgAbout from './../../assets/pri-about.png'

import './about.css'
export default function(){

  return(
    <div className="">
      <div className="containerAbout">


        <div className="imgContainer">
            <img src={imgAbout} alt=""/>
        </div>

        <div className="contentAbout">
          <h1>Quem é Priscila Morais de Almeida ?</h1>
          <p>
            Advogada a 7 anos prestando serviços de advocacia com excelência, especializada 
            e humanizada, atuando com responsabilidade, comprometimento, qualidade e competência, pautada na ética profissional.
            Sempre voltada para as necessidades do cliente, visando alcançar os melhores resultados, buscando soluções harmônicas e especializadas para cada caso.
          </p>

          <button className="btn-About-contact">Entre em Contato</button>
        </div>
      </div>

    </div>
  )
}