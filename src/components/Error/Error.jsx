import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Error() {
  return (
    <div>
        <h1>Llegaste a un lugar inexistente </h1>
        <span>Quizas tu gato camino sobre tu teclado </span>
        <span>te recomendamos que le des de comer y que cuando vuelvas </span>
        <span>hagas clic en cualquier link del menu superior </span>
        <Outlet/>
    </div>
  )
}
