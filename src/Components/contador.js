import React, { Component } from 'react';
import  "./style.css"
import Videojuegos from "../videojuegos.json"



class Componente extends Component {

    state  = {

    Videogames:[]
            } 


componentDidMount(){
    var popular = Videojuegos.map(obj=>{
        return {
            videojuego:obj.name,
            El_Genero:obj.genero,
            La_Imagen:obj.imagen,
            Consolas_Disponibles:obj.plataformas.consola.name

        }
       } 
       )             
    
    this.setState(
        {
            Videogames: popular
        }
    )
    
    }
     render(){
         return(
             <>
             <h1 className='titulo' > Videojuegos</h1>
             {this.state.Videogames.map(el=>(
                
              <div className='principal'> 
            
            <h2>Videojuego</h2> 
                
              <h3> {el.videojuego} </h3>    
              <h2 className='titulo_genero' >  Genero </h2>
              <h3 className='genero' >  {el.El_Genero} </h3>
              <h2 className='titulo_consolas' >  Consolas </h2>
              <h3 className='consolas'>  {el.Consolas_Disponibles} </h3>
              <img className='imagenes'  src={el.La_Imagen} alt="No encontro la imagen" />
              </div>
             )
             
                )}

              
             </>
         );
     }
    
    
    
}


export default Componente 
