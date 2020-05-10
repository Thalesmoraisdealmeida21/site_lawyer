import React, {useEffect} from 'react'
import {FaArrowRight }from 'react-icons/fa'

import imagemaleatoria from './../../../assets/DireitoInventario.jpeg'
import Header from './../../header/header'
import './listpost.css'
import { Link } from 'react-router-dom'
export default function(){


  useEffect(()=>{
      if(document.location.pathname === '/blog'){
            window.scrollTo(0, 0);
      } 
  })

  return(
    <div className="">

      <Header></Header>
      <div className="page-header">
            <span>Blog</span>
      </div>
      <div className="containerBlog">
   
         
          <div className="postItem">
                <img src={imagemaleatoria} height="300vh" alt=""/>

                <div className="infoPost">
                    <strong>Este é o primeiro post que estou colocando aqui aleatoriamente</strong>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, 
                      leo non fermentum tristique, augue enim aliquet nibh, eget porta libero 
                      purus eu tellus.
                       Suspendisse 
                       </p>

                        <Link to={'/blog/publicacao/1'} href="#"> Saiba Mais <FaArrowRight></FaArrowRight>  </Link> 
                </div>
          </div>


             
          <div className="postItem">
                <img src={imagemaleatoria} height="300vh" alt=""/>

                <div className="infoPost">
                    <strong>Este é o primeiro post que estou colocando aqui aleatoriamente</strong>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, 
                      leo non fermentum tristique, augue enim aliquet nibh, eget porta libero 
                      purus eu tellus.
                       Suspendisse 
                       </p>

                        <a href="#"> Saiba Mais <FaArrowRight></FaArrowRight>  </a> 
                </div>
          </div>


             
          <div className="postItem">
                <img src={imagemaleatoria} height="300vh" alt=""/>

                <div className="infoPost">
                    <strong>Este é o primeiro post que estou colocando aqui aleatoriamente</strong>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, 
                      leo non fermentum tristique, augue enim aliquet nibh, eget porta libero 
                      purus eu tellus.
                       Suspendisse 
                       </p>

                        <a href="#"> Saiba Mais <FaArrowRight></FaArrowRight>  </a> 
                </div>
          </div>


             
          <div className="postItem">
                <img src={imagemaleatoria} height="300vh" alt=""/>

                <div className="infoPost">
                    <strong>Este é o primeiro post que estou colocando aqui aleatoriamente</strong>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, 
                      leo non fermentum tristique, augue enim aliquet nibh, eget porta libero 
                      purus eu tellus.
                       Suspendisse 
                       </p>

                        <a href="#"> Saiba Mais <FaArrowRight></FaArrowRight>  </a> 
                </div>
          </div>


             
          <div className="postItem">
                <img src={imagemaleatoria} height="300vh" alt=""/>

                <div className="infoPost">
                    <strong>Este é o primeiro post que estou colocando aqui aleatoriamente</strong>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, 
                      leo non fermentum tristique, augue enim aliquet nibh, eget porta libero 
                      purus eu tellus.
                       Suspendisse 
                       </p>

                        <a href="#"> Saiba Mais <FaArrowRight></FaArrowRight>  </a> 
                </div>
          </div>


             
          <div className="postItem">
                <img src={imagemaleatoria} height="300vh" alt=""/>

                <div className="infoPost">
                    <strong>Este é o primeiro post que estou colocando aqui aleatoriamente</strong>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, 
                      leo non fermentum tristique, augue enim aliquet nibh, eget porta libero 
                      purus eu tellus.
                       Suspendisse 
                       </p>

                        <a href="#"> Saiba Mais <FaArrowRight></FaArrowRight>  </a> 
                </div>
          </div>


      </div>


    </div>
  )
}