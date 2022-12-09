import React from 'react'
import styles from '../About/About.module.css'
import image from '../../img/holden.jpeg'

export default function About() {
  return (
    <div className={styles.about}>
        <h1>Acerca de Mí</h1>
        <p>Hola, mi nombre es Gabriel Rouco, y este pequeño proyecto en progreso</p>
        <p> Fue diseñado para el M2 de Henry. Se realizo utilizando: React, Redux, Javascript, cafeina </p>
        <p>y mis gatos caminando sobre el teclado.</p>
        <p>Agradezco el apoyo de los TAs, de mis compañeros, de la Instructora Aura Sandoval.</p>
        <p>Y por ultimo pero no menos importante agradezco el apoyo y compañia de mi pareja, Agustina Gomez</p>
        <p>Tambien como pequeño regalo por haber llegado hasta aca, dejo una imagen que representa a un gato caminando sobre mi teclado</p>
        <p>(ignorar la pantalla, en ese momento estaba de descanso)</p>
        <img src={image} alt="Holden" />
    </div>
  )
}
