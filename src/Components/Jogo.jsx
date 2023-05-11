import React, { useState } from 'react'
import Letras from './Letras'
import palavras from '../palavras'

export default function Jogo() {
  let contagemErros = 0

  const [inputDisabled, setInputDisabled] = useState(true)
  const [botoesDisabled, setBotoesDisabled] = useState(true)
  const [palavra, setPalavra] = useState('')
  const [letrasExibidas, setLetrasExibidas] = useState([])

  function habilitarLetras() {
    setBotoesDisabled(false)
    const palavraSorteada =
      palavras[Math.floor(Math.random() * palavras.length)]
    setPalavra(palavraSorteada)
    console.log(palavraSorteada)
    setLetrasExibidas(new Array(palavraSorteada.length).fill('_'))
  }

  function handleLetterClick(letra) {
    const indices = []
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === letra) {
        indices.push(i)
      }
    }
    if (indices.length > 0) {
      const novasLetrasExibidas = [...letrasExibidas]
      for (let i = 0; i < indices.length; i++) {
        novasLetrasExibidas[indices[i]] = letra
      }
      setLetrasExibidas(novasLetrasExibidas)
    }
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
          <div className="palavra">{letrasExibidas.join(' ')}</div>
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
