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

        <div className="row">
              <div className="card">
                  <img src={DireitoPrevidenciario} alt=""/>
                  <h2>Direito Previdenciário</h2>
                  <p>Override the digital divide with additional clickthroughs from DevOps along the information highway will close.</p>
              </div>


              <div className="card">
                  <img src={DireitoFamilia} alt=""/>
                  <h2>Direito de Familia</h2>
                  <p>Override the digital divide with additional clickthroughs from DevOps along the information highway will close.</p>
              </div>

              <div className="card">
                  <img src={DireitoInventario} alt=""/>
                  <h2>Inventários </h2>
                  <p>Override the digital divide with additional clickthroughs from DevOps along the information highway will close.</p>
              </div>
        </div>

        <div className="row">
              <div className="card">
                  <img src={DireitoIndenizatorio} alt=""/>
                  <h2>Direito Indenizatório</h2>
                  <p>Override the digital divide with additional clickthroughs from DevOps along the information highway will close.</p>
              </div>


              <div className="card">
                  <img src={DireitoConsumidor} alt=""/>
                  <h2>Direito do Consumidor</h2>
                  <p>Override the digital divide with additional clickthroughs from DevOps along the information highway will close.</p>
              </div>

              <div className="card">
                  <img src={DireitoCivil} alt=""/>
                  <h2>Direito Civil</h2>
                  <p>Override the digital divide with additional clickthroughs from DevOps along the information highway will close.</p>
              </div>
        </div>

      </div>

    </div>
  )
}