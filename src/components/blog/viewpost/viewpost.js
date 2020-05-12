import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from './../../header/header'
import api from './../../../service/api'
import './viewpost.css'

import headerImage from './../../../assets/headerBlog.png'
export default function(){

  const [post, setPost]= useState({});
  const { id } = useParams()

  function getDataPost(){
          const res = api.get('post/' + id).then((resp)=>{
              setPost(resp.data);
          })
  }


  useEffect(()=>{
    getDataPost();
  },[])
  return(
    <div className="">  

    <Header></Header>

        <div className="HeaderPost">

          <div className="pageTitle">
            <p> {post.titulo}</p>
          </div>
        
     



        <img src={post.imgCapa} alt=""/>
        <p dangerouslySetInnerHTML={{__html:  post.descricao}}>
              
        </p>
     
       
          
       
        </div>

       

    </div>
  )
}