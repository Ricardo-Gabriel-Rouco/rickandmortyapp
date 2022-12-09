import React from 'react';
import Card from '../Card/Card.jsx';


export default function Cards(props) {
   const {characters, onClose} = props;
   
   return <div>
      {
         characters.map(personaje =>(
            <Card
            key={personaje.id}
            onClose={()=>onClose(personaje.id)}
            id = {personaje.id}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            image={personaje.image}
            />
            ))
      }
   </div>;
};