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
    <div>


      <div className="containerAreas">
        <div className="grid">

    

          <div className="itemGrid">
            <a href="">
              <img src={DireitoPrevidenciario} alt=""/>
              <div className="backgroundContainer"></div>
              <h2>Direito Previdenciario</h2>      
            </a>
          </div>

          <div className="itemGrid">
            <a href="">
              <img src={DireitoFamilia} alt=""/>
              <div className="backgroundContainer"></div>
              <h2>Direito de Familia</h2>      
            </a>
          </div>


          <div className="itemGrid">
            <a href="">
              <img src={DireitoInventario} alt=""/>
              <div className="backgroundContainer"></div>
              <h2>Inventarios</h2>      
            </a>
          </div>

          <div className="itemGrid">
            <a href="">
              <img src={DireitoIndenizatorio} alt=""/>
              <div className="backgroundContainer"></div>
              <h2>Indenizatórios e Cobranças</h2>      
            </a>
          </div>

          <div className="itemGrid">
            <a href="">
              <img src={DireitoConsumidor} alt=""/>
              <div className="backgroundContainer"></div>
              <h2>Direito do Consumidor</h2>      
            </a>
          </div>

          <div className="itemGrid">
            <a href="">
              <img src={DireitoCivil} alt=""/>
              <div className="backgroundContainer"></div>
              <h2>Direito Civil</h2>      
            </a>
          </div>

        </div>

      </div>

    </div>
  )
}