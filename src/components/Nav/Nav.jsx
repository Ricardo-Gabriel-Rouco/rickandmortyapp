import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchRandom from '../SearchRandom/SearchRandom'
// eslint-disable-next-line
import {NavLink, useLocation} from 'react-router-dom'
import styles from './Nav.module.css'

// on search seria la funcion de agregado de personajes
export default function Nav({onSearch, onSearchRandom, logout}) {
  const location = useLocation()
  return (
    <div className={styles.navBar}>
      <div className={styles.menu1}>
        <NavLink to={'/home'}>
          <p>Home</p>
        </NavLink>
        <NavLink to={'/favourites'}>
          <p>Mis Favoritos</p>
        </NavLink>
        <NavLink to={'/about'}>
          <p>About</p>
        </NavLink>
        <NavLink to={'/'} onClick={logout}>
          <p>Cerrar Sesion</p>
        </NavLink>
        </div>
        {location.pathname ==='/home' || '/Fav' ?
        <div className={styles.menu2}>
          <SearchBar onSearch={onSearch}/>
          <SearchRandom onSearchRandom={onSearchRandom}/>
        </div>
        : null}
    </div>
  )
}
