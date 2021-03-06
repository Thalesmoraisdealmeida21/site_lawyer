import React from 'react'


import './areas.css'

import DireitoPrevidenciario from './../../assets/Direito-Previdenciario.png'
import DireitoFamilia from './../../assets/Direito-Familia.jpg'
import DireitoInventario from './../../assets/DireitoInventario.jpeg'
import DireitoIndenizatorio from './../../assets/DireitoIndenizatorio.jpg'
import DireitoConsumidor from './../../assets/DireitoConsumidor.jpg'
import DireitoCivil from './../../assets/DireitoCivil.jpg'
export default function(){




  return(

   

      <div className="containerAreas">

        <div className="row">
              <div className="card">
                  <img src={DireitoPrevidenciario} alt=""/>
                  <h2>Direito Previdenciário</h2>
                  <p>Assessoria judicial e administrativa quanto aos direitos e obrigações da Previdência Social, contemplando concessão e revisão de aposentadorias, benefícios por incapacidade, auxílios e pensões.</p>
                  <a target="__blank" href="https://api.whatsapp.com/send?phone=5555996753805&text=Olá%2C%20preciso%20de%20ajuda%20com%20uma%20situa%C3%A7%C3%A3o%20de%20Direito%20Previdenci%C3%A1rio.%20Pode%20me%20ajudar%20%3F" className="btn-about btn-custom"> Entre em Contato </a>
          
              </div>


              <div className="card">
                  <img src={DireitoFamilia} alt=""/>
                  <h2>Direito de Familia e Sucessões</h2>
                  <p>Atuação judicial e extrajudicial em casos de inventários, divórcios, uniões estáveis, partilha de bens, alimentos, guarda, investigação de paternidade, dentre outros serviços relacionados ao direito de família</p>
                  <a target="__blank" href="https://api.whatsapp.com/send?phone=5555996753805&text=Olá%2C%20preciso%20de%20ajuda%20com%20uma%20situa%C3%A7%C3%A3o%20de%20Direito%20de%20Fam%C3%ADlia.%20Pode%20me%20ajudar%20%3F" className="btn-about btn-custom"> Entre em Contato </a>
          
              </div>

              <div className="card">
                  <img src={DireitoInventario} alt=""/>
                  <h2>Correspondência Jurídica </h2>
                  <p>Atuamos com correspondência jurídica na realização de audiências, protocolos, cópias, despachos e demais diligências na cidade de São Luiz Gonzaga/RS</p>
                  <a target="__blank" href="https://api.whatsapp.com/send?phone=5555996753805&text=Olá%2C%20preciso%20de%20ajuda%20com%20um%20invent%C3%A1rio.%20Pode%20me%20ajudar%20%3F" className="btn-about btn-custom"> Entre em Contato </a>
          
              </div>
        </div>

        <div className="row">
          


              <div className="card">
                  <img src={DireitoConsumidor} alt=""/>
                  <h2>Direito do Consumidor</h2>
                  <p>Assessoria quanto aos direitos e obrigações dos consumidores perante os fornecedores de bens e serviços, contemplando cobranças indevidas, produtos com defeitos, dentre outros serviços.</p>
                  <a target="__blank" href="https://api.whatsapp.com/send?phone=5555996753805&text=Olá%20Preciso%20de%20ajuda%20com%20uma%20situa%C3%A7%C3%A3o%20sobre%20Direito%20do%20Consumidor.%20Pode%20me%20ajudar%20%3F" className="btn-about btn-custom"> Entre em Contato </a>
          
              </div>

              <div className="card">
                  <img src={DireitoCivil} alt=""/>
                  <h2>Direito Civil</h2>
                  <p> Entre outras atividades que o escritório exerce na esfera do Direito Civil destaca-se, 
                      assessoria, indenizações, danos morais e materiais, cobranças, entre outros.</p>
                  <a target="__blank" href="https://api.whatsapp.com/send?phone=5555996753805&text=Olá%2C%20preciso%20verificar%20uma%20situa%C3%A7%C3%A3o%20sobre%20Direito%20Indenizat%C3%B3rio.%20Pode%20me%20ajudar%20%3F" className="btn-about btn-custom"> Entre em Contato </a>
          
              </div>
        </div>

      </div>

 
  )
}