import React, {useEffect, useState} from 'react'
import {FaArrowRight }from 'react-icons/fa'

import imagemaleatoria from './../../../assets/DireitoInventario.jpeg'
import Header from './../../header/header'
import Footer from './../../footer/footer'
import Loader from './../../../assets/loader.svg'

import api  from './../../../service/api'
import './listpost.css'
import { Link } from 'react-router-dom'
export default function(){

      const [posts, setPosts] = useState([])
      const [page, setPage] = useState(1);
      const [statusLoading, setStatusLoading] = useState(true);

      async function getAllPosts(){
            const url = "posts/" + page
            setStatusLoading(true)
     
            const  response = await api.get(url).then((retPosts)=>{
                  if(retPosts.data){
                        setPosts([...posts, ... retPosts.data])
                        setStatusLoading(false);
                        setPage(page + 1)
                  }
                  
                 
            })    




      }



  useEffect(()=>{
      setStatusLoading(true)
      getAllPosts();
  }, [])

  return(
    <div className="">

      <Header></Header>
      <div className="page-header">
            <span>Blog</span>
      </div>
      <div className="containerBlog">
   

            {posts.map(post => (
                  <div className="postItem">
                  <img src={imagemaleatoria} height="300vh" alt=""/>

                  <div className="infoPost">
                         <strong>{post.titulo}</strong>

                        <p dangerouslySetInnerHTML={{__html: post.descricao}}>
                            
                        </p>

                        <Link to={'/blog/publicacao/'} href="#"> Saiba Mais <FaArrowRight></FaArrowRight>  </Link> 
                  </div>
                  </div>

            ))}   
              {!statusLoading &&
                 <button onClick={ getAllPosts} className="seeMore">Ver Mais</button>
               }

              {statusLoading &&
                 <img className="loading" src={Loader} alt=""/>
               }
                   
               
                
                
       
                

      </div>

                  <Footer></Footer>
    </div>

    
   
  )
}