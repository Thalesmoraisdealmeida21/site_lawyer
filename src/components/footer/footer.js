import React from 'react'
import './footer.css'
import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone} from 'react-icons/fa'


export default function(){

  return(

    <div className="">


      <div className="containerFooter">

        <div className="about">
            <h1>Sobre</h1>
            <p>Advogada dedicada em atender seus clientes com excelência e de forma descomplicada</p>
        </div>


        <div className="contactInfo">
          <h1>Informações de Contato</h1>
          <p>
            <FaPhone></FaPhone> Telefone: (55) 9 96753805 <br />
            <FaEnvelope></FaEnvelope> E-mail: pmorais@hotmail.com <br />
            <br /> 
            <a className="btn-custom" href="https://api.whatsapp.com/send?phone=5555996753805&text=Ola%2C%20eu%20preciso%20de%20uma%20advogada%2C%20pode%20me%20ajudar">Chamar no Whatsapp</a>
              
                
          </p>
        </div>


        <div className="areasAtuacao">
          
          <h1>Áreas de Atuação</h1>
          <ul>
            <li>Direito Civil</li>
            <li>Direito Previdenciario</li>
            <li>Direito do Consumidor</li>
            <li>Indenizatórios e Cobranças </li>
            <li>Invetários</li>
           
        
          </ul>
        </div>



      </div>


    </div>
  )
}