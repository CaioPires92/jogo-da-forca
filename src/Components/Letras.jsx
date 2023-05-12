import React, { useState } from 'react'
import alfabeto from '../alfabeto'

function Letras(props) {
  const { disabled, onLetterClick } = props

  function handleClick(letra) {
    onLetterClick(letra)
    console.log(letra)
    props.setLetrasClicadas([...props.letrasClicadas, letra])
  }

  return (
    <div className="btn-container">
      {alfabeto.map(letra => (
        <button
          disabled={disabled || props.letrasClicadas.includes(letra)}
          onClick={() => handleClick(letra)}
          className={`btn-letras ${
            props.letrasClicadas.includes(letra) ? 'clicked' : ''
          }`}
          key={letra}
        >
          {letra.toLocaleUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default Letras
