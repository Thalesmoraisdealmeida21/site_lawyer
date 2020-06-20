import React, { useState } from 'react'
import api from './../../service/api'
import {FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa'

import './contact.css'
export default function(){



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, settelephone] = useState('');
  const [subject, setsubject] = useState('');
  const [message, setmessage] = useState('');
  

  function sendContact(e){
      e.preventDefault();

    const data = {
      to: "thales.morais21@gmail.com, pmorais.almeida@gmail.com",
      from: "thalesmoraisdealmeida@outlook.com",
      name,
      email,
      telephone,
      subject,
      message,
    }


    if(!data.name){
      alert("Digite seu nome para continuar")
    }else {
      if(!data.telephone){
        alert("Digite seu telefone para continuar")
      } else {
        console.log(data);

        api.post('sendmail', data).then((res)=>{
              if(res.status === 200){
                  alert("Recebemos sua mensagem, em breve estaremos retornando o contato !!");
              } else {
                alert("Ocorreu um erro ao transmitir sua mensagem");
              }
        }).catch((e)=>{
              alert(`OCorreu um erro ao transmitir sua mensagem ${e.message}`)
        })
      }
    }
    



  }

  return(

    <div>

          <div className="containerContact">

            <div className="containerForm">


                    <form action="">


                          <div className="formGroup">
                              <input value={name} onChange={(e)=>{ setName(e.target.value)}} type="text"placeholder="Nome"/>
                          </div>

                          <div className="formGroup">
                              <input value={subject} onChange={(e)=>{ setsubject(e.target.value)}} type="text" placeholder="Assunto"/>
                          </div>

                          <div className="formGroup">
                              <input value={telephone} onChange={(e)=>{ settelephone(e.target.value)}} type="text"placeholder="Telefone"/>
                          </div>

                          <div className="formGroup">
                              <input value={email} onChange={(e)=>{ setEmail(e.target.value)}} type="text" className="input" placeholder="E-mail"/>
                          </div>
                          <div className="formGroup">
                          <textarea value={message} onChange={(e)=>{ setmessage(e.target.value)}} rows="5" placeholder="Diga o que você precisa"></textarea>
                          </div>

                          <div className="containerButton">
                            <button onClick={sendContact} className="btnSubmit">Enviar Mensagem</button>
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
                  <a href="https://www.linkedin.com/in/priscila-morais-de-almeida-14486087/" target="__blank">
                      <FaLinkedin size={30}></FaLinkedin>
                  </a>
                    <a href="https://www.instagram.com/priscilamorais.adv/" target="__blank">
                    <FaInstagram size={30}></FaInstagram>
                    </a>
                    <a href="https://www.facebook.com/advogadapriscilamorais" target="__blank">

                    <FaFacebook size={30}></FaFacebook>
                    </a>
                   
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