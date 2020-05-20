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
      const [endOfPageStatus, setEndOfPage] = useState(false);

      async function getAllPosts(){
            const url = "posts/" + page
            setStatusLoading(true)
     
            const  response = await api.get(url).then((retPosts)=>{

                  if(retPosts.data.length > 0){
                        setPosts([...posts, ... retPosts.data])
                        setStatusLoading(false);
                        setPage(page + 1)
                  } else {
                       setEndOfPage(true);
                       setStatusLoading(false)
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
                  
                  <Link to={'/blog/publicacao/' + post.id} href="#">
                  <img src={post.imgCapa} height="300vh" alt="Sem Imagem"/>
                  </Link>

                  <div className="infoPost">
                  <Link to={'/blog/publicacao/' + post.id} href="#"> <strong>{post.titulo}</strong>
                              </Link>
                        <div className="resumo">

                              {post.resumo}
                            
                        </div>

                        <Link to={'/blog/publicacao/' + post.id} href="#"> Saiba Mais <FaArrowRight></FaArrowRight>  </Link> 
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