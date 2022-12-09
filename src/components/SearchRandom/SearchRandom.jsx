import React, {useState} from 'react'

export default function SearchRandom(props) {
    const {onSearchRandom} = props
    // eslint-disable-next-line
    const [character, setCharacter] = useState("")
  return (
    <div>
      <button onClick={() =>onSearchRandom(character)}>Personaje Random</button> 
    </div>
  )
}
