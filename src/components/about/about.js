import React from 'react'
import imgAbout from './../../assets/pri-about.png'

import './about.css'
import { useEffect } from 'react'
export default function(){

  function toContact(){
      window.location.href = "https://api.whatsapp.com/send?phone=5555996753805&text=Ola%2C%20eu%20preciso%20de%20uma%20advogada%2C%20pode%20me%20ajudar%20?"
  }


  return(
    <div className="">
      <div className="containerAbout">


        <div className="imgContainer">
            <img src={imgAbout} alt=""/>
        </div>

        <div className="contentAbout">
          <h1>Quem é Priscila Morais de Almeida ?</h1>
          <p>
            Advogada com mais de sete anos de experiência, prestando serviços de advocacia com excelência, especializada 
            e humanizada, atuando com responsabilidade, comprometimento, qualidade e competência, pautada na ética profissional.
            Sempre voltada para as necessidades do cliente, visando alcançar os melhores resultados, buscando soluções harmônicas e especializadas para cada caso.
          </p>

          <button onClick={toContact} className="btn-About-contact">Entre em Contato</button>
        </div>
      </div>

    </div>
  )
}