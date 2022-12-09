import React from 'react'
import { Outlet } from 'react-router-dom'
import image from '../../img/error404.jpeg'
import styles from '../About/About.module.css'

export default function Error() {
  return (
    <div className={styles.about}>
        <h1>Llegaste a un lugar inexistente </h1>
        <p>Quizas tu gato camino sobre tu teclado </p>
        <p>te recomendamos que le des de comer y que cuando vuelvas </p>
        <p>hagas clic en cualquier link del menu superior </p>
        <img src={image} alt="Gatito caminando en el teclado" />
        <Outlet/>
    </div>
  )
}
