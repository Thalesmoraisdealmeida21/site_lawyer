import React from 'react'
import Header from '../header/header'
import Areas from '../areas-atuacao/areas-atuacao'
import About from '../about/about'
import Footer from '../footer/footer'
export default function (){




  return (

    <div className="containerIndex"> 
      <div id="home">
          <Header></Header>
       </div>
      
       <div id="areas">
          <Areas ></Areas>
       </div>
      <div id="sobre">
      <About></About>
      </div>

      <Footer></Footer>
      
    </div>
   
  )
}