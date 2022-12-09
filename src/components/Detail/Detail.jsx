import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from '../Card/Card.module.css'


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
    <div className={styles.card}>
        <img src={character.image} alt={character.name} />
        <div className={styles.options2}>
        <Link to={'/home'}>
        <button>Volver</button>
        </Link>
        </div>
        <h1>{character.name}</h1>
        <h2>STATUS: {character.status}</h2>
        <h2>SPECIE: {character.species}</h2>
        <h2>GENDER: {character.gender}</h2>
        <h2>ORIGIN: {character.origin?.name}</h2>
        
    </div>
  )
}