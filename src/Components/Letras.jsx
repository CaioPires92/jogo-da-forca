import React from 'react'
import alfabeto from '../alfabeto'
import './Letras.css'

function AlfabetoBotoes() {
  return (
    <div>
      {alfabeto.map(letra => (
        <button key={letra}>{letra}</button>
      ))}
    </div>
  )
}

export default AlfabetoBotoes
