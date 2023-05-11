import React, { useState } from 'react'
import alfabeto from '../alfabeto'

function Letras(props) {
  const { disabled, onLetterClick } = props
  const [letrasClicadas, setLetrasClicadas] = useState([])

  function handleClick(letra) {
    onLetterClick(letra)
    console.log(letra)
    setLetrasClicadas([...letrasClicadas, letra])
  }

  return (
    <div className="btn-container">
      {alfabeto.map(letra => (
        <button
          disabled={disabled}
          onClick={() => handleClick(letra)}
          className={`btn-letras ${
            letrasClicadas.includes(letra) ? 'clicked' : ''
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
