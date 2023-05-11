import React, { useState } from 'react'
import Letras from './Letras'
import palavras from '../palavras'

export default function Jogo() {
  let contagemErros = 0

  const [inputDisabled, setInputDisabled] = useState(true)
  const [botoesDisabled, setBotoesDisabled] = useState(true)
  const [palavra, setPalavra] = useState('')

  function habilitarLetras() {
    setBotoesDisabled(false)
    const palavraSorteada = palavras[Math.floor(Math.random() * palavra.length)]
    setPalavra(palavraSorteada)
  }

  function handleLetterClick(letra) {
    // console.log(letra)
  }

  return (
    <div>
      <header>
        <h1>Bônus: Input de Chute</h1>
      </header>
      <div className="container">
        <div>
          <img src="assets/forca0.png" alt="" />
        </div>
        <div className="container-palavra">
          <button className="btn-escolher" onClick={habilitarLetras}>
            Escolher Palavra
          </button>
          <div className="palavra">{palavra.split('').map(() => '_ ')}</div>
        </div>
      </div>
      <Letras disabled={botoesDisabled} onLetterClick={handleLetterClick} />
      <div className="container-input">
        <h2>Ja sei a palavra!</h2>
        <input disabled={inputDisabled} type="text" />
        <button>Chutar</button>
      </div>
    </div>
  )
}
