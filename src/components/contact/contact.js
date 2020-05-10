import React from 'react'
import {FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa'

import './contact.css'
export default function(){


  return(

    <div>

          <div className="containerContact">

            <div className="containerForm">


                    <form action="">


                          <div className="formGroup">
                              <input type="text"placeholder="Nome"/>
                          </div>

                          <div className="formGroup">
                              <input type="text"placeholder="Telefone"/>
                          </div>

                          <div className="formGroup">
                              <input type="text" className="input" placeholder="E-mail"/>
                          </div>
                          <div className="formGroup">
                          <textarea rows="5" placeholder="Diga o que você precisa"></textarea>
                          </div>

                          <div className="containerButton">
                            <button className="btnSubmit">Enviar Mensagem</button>
                          </div>
                    </form>
            </div>


            <div className="infoContacts">
                

                <label htmlFor="">
                  <strong>Telefone</strong>
                  <span>(+55) 9 96753805</span>
                </label>

                <label htmlFor="">
                  <strong>E-mail</strong>
                  <span>pmorais.almeida@gmail.com</span>
                </label>

                <br/>

                <div className="icons">
                    <FaLinkedin size={30}></FaLinkedin>
                    <FaInstagram size={30}></FaInstagram>
                    <FaFacebook size={30}></FaFacebook>
                </div>

                <label htmlFor="">
                  <strong>Endereo</strong>
                  <span> Avenida Senador Pinheiro Machado, n 3000, Sala 02, São Luiz Gonzaga - RS</span>
                </label>
                  <br/><br/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7018.727503546033!2d-54.953942!3d-28.408279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4cf54f83f86c6f2e!2sPriscila%20Morais%20de%20Almeida%20-%20Advogada!5e0!3m2!1spt-BR!2sbr!4v1589050101122!5m2!1spt-BR!2sbr" width="100%" height="250vh"></iframe>

            </div>

          </div>
    </div>
  )
}