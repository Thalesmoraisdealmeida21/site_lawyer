import React from 'react'
import {FaArrowRight }from 'react-icons/fa'

import { Link } from 'react-router-dom'

import imagemaleatoria from './../../../assets/DireitoInventario.jpeg'
import Header from './../../header/header'
import './listpost.css'
export default function(){
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