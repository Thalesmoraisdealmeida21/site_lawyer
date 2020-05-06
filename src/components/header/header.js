import React, {useState, useEffect} from 'react'
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaMapMarked } from 'react-icons/fa'
import './header.css'

import logo from './../../assets/logo.png'
import priRecortada from './../../assets/PriRecortada.png'

export default function(){

  const [menuStatus, setMenuStatus] = useState("menuCollapse hiddenMenu");
  const [menuUlStatus, setMenuUlStatus] = useState("nav-ul hiddenMenu");
  const [navPosition, setNavPosition] = useState('navbartop')
  function showMenu(){
    if(menuStatus == "menuCollapse hiddenMenu"){
      setMenuStatus("menuCollapse showMenu");
      setMenuUlStatus("nav-ul showMenu")
    } else {
      setMenuStatus("menuCollapse hiddenMenu");
      setMenuUlStatus("nav-ul hiddenMenu")
    }
   
  }

  useEffect(()=>{
      window.onscroll = () =>{
        if(window.scrollY > 2){
            setNavPosition('navbartop nav-fixed')
        } else {
          setNavPosition('navbartop')
        }
      }
  })

  function toPageScroll(page){
        let elementScroll = "#"+ page

        window.scroll({       // 1
          top: document
        .querySelector(elementScroll)
          .offsetTop,       // 2
          left: 0,
          behavior: 'smooth'// 3
       });
  }



  


  return(
    
      <div className="container">
        <div className="contactbar">


          

            <div className="MiddleOfContacts">
                 <FaPhone></FaPhone> Telefone: 55 996753805 | <FaEnvelope></FaEnvelope> E-mail: contato@priscilamorais.com
                 <br/>
                 <a className="endereco" href="https://www.google.com/maps?ll=-28.408279,-54.953942&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=5545425944403799854">
                    <FaMapMarked></FaMapMarked> Avenida Senador Pinheiro Machado, n 3000, Sala 02, São Luiz Gonzaga
                  </a>
            </div>

          


            <div className="socialMedias">
              <div className="socialMediaContactBar">
                  <a href="#" className="linkSocial">
                  <FaLinkedin className="socialMediaContactBar" color={"white"} size={26}></FaLinkedin>
                  </a>

                  <a href="#" className="linkSocial">
                    <FaFacebook className="socialMediaContactBar" color={"white"} size={26}></FaFacebook>
                  </a>
                  
                  <a href="" className="linkSocial">
                     <FaInstagram className="socialMediaContactBar" color={"white"} size={26}></FaInstagram>
                  </a>

               
                  
              </div>
              <a className="btn-custom" href="https://api.whatsapp.com/send?phone=5555996753805&text=Ola%2C%20eu%20preciso%20de%20uma%20advogada%2C%20pode%20me%20ajudar">Chamar no Whatsapp</a>
              
                
            
            </div>


            

        </div>


        <nav className={navPosition}>

            <div className="logo-container">
              <img src={logo} alt="Priscila Morais"></img>
            </div>

            

              
            <button className="btn-toggle" onClick={showMenu}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>

            <div className={menuStatus}>
                <ul className={menuUlStatus}>
                  <li>
                     <a onClick={()=>toPageScroll('home')} className="areasLink">Inicio</a>
                  </li>

                  <li>
                     <a onClick={()=>toPageScroll('areas')} className="areasLink">Áreas de Atuação</a>
                  </li>
                  
                  <li>
                      <a onClick={()=>toPageScroll('sobre')} className="areasLink" >Sobre mim</a>
                  </li>

             

                  <li>
                      <a className="areasLink">Contato</a>
                  </li>

                  <li>
                      <a className="areasLink" >Blog</a>
                  </li>
                </ul>
            </div>
       

          
          
        </nav>


        <div className="welcome">


              <div className="textWelcomeContainer">
                <h1>Priscila Morais de Almeida</h1>
                <p>
                  Advogada dedicada em atender seus clientes com excelência e de forma descomplicada.
                  Especialista em direito civil, das famílias
                  e sucessões e em direito previdenciário.
                  
            
                   </p>
                   <a href="#">
                    <button className="btn-custom btn-about-more">Saiba Mais</button>
                   </a>
      

              </div>

              <img src={priRecortada} className="imgPriRecortada" alt=""/>
        </div>
      </div>

      
  )
 
}