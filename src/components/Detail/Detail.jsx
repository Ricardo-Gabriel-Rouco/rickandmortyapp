import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function Detail() {
    
    const {detailId} = useParams()
    const [character, setCharacter ] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);
     
  return (
    <div>
        <Link to={'/home'}>
        <button>Volver</button>
        </Link>
        <img src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
        <h2>STATUS: {character.status}</h2>
        <h2>ESPECIE: {character.species}</h2>
        <h2>GENERO: {character.gender}</h2>
        <h2>ORIGEN: {character.origin?.name}</h2>
        
    </div>
  )
}