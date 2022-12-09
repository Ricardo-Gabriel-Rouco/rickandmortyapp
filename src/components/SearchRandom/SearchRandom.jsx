import React, {useState} from 'react'
import styles from '../SearchBar/SearchBar.module.css'

export default function SearchRandom(props) {
    const {onSearchRandom} = props
    // eslint-disable-next-line
    const [character, setCharacter] = useState("")
  return (
    <div className={styles.searchBar}>
      <button onClick={() =>onSearchRandom(character)}>Get Random</button> 
    </div>
  )
}
