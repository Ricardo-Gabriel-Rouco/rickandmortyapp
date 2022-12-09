import React from "react";
// import { DivCard } from "../styles";
import { Link } from 'react-router-dom'
import {addFavorite, deleteFavorite} from '../../redux/actions'
import {connect} from 'react-redux'
import { useState, useEffect } from "react";

export function Card(props) {
   const [isFav, setIsFav] = useState(false)

   function handleFavorite() {
      if(isFav){
         setIsFav(false)
         props.deleteFavorite(props.id)
      }
      else {
         setIsFav(true);
         props.addFavorite(props)
      }
      
   }

   useEffect(() => {
     props.myFavorites.forEach((fav) =>{
      if(fav.id === props.id){
         setIsFav(true)
      }
     })
     // eslint-disable-next-line
   }, [props.myFavorites])
   
   return (
      
      <div>
         { isFav ? 
         (<button onClick={handleFavorite}>❤️</button>) :
         (<button onClick={handleFavorite}>🤍</button>)
         }
         <button onClick={props.onClose}>X</button>
         <img  src={props.image} alt="" />
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
      </div>
      
   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFavorite: (id) => dispatch(addFavorite(id)),
      deleteFavorite: (id) => dispatch(deleteFavorite(id))
   }
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
