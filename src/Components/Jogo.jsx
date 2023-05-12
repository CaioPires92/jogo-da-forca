import React, { useState } from 'react'
import Letras from './Letras'
import palavras from '../palavras'
import forca0 from '../assets/forca0.png'
import forca1 from '../assets/forca1.png'
import forca2 from '../assets/forca2.png'
import forca3 from '../assets/forca3.png'
import forca4 from '../assets/forca4.png'
import forca5 from '../assets/forca5.png'
import forca6 from '../assets/forca6.png'

const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

console.log(imagensForca)

export default function Jogo() {
  const [contagemErros, setContagemErros] = useState(0)
  const [inputDisabled, setInputDisabled] = useState(true)
  const [botoesDisabled, setBotoesDisabled] = useState(true)
  const [palavra, setPalavra] = useState('')
  const [letrasExibidas, setLetrasExibidas] = useState([])
  const [resetaJogo, setResetaJogo] = useState(false)

  const [letrasClicadas, setLetrasClicadas] = useState([])

  const perdeu = contagemErros === imagensForca.length - 1
  const ganhou = palavra === letrasExibidas.join('')
  // const ganhou =
  //   letrasExibidas.filter(letra => letra !== '_').length === palavra.length

  console.log('ganhou perdeu', ganhou, perdeu)

  console.log('reseta Jogo: ', resetaJogo)

  function handleResetaJogo() {
    setContagemErros(0)
    setResetaJogo(true)
    setLetrasClicadas([])
  }

  function habilitarLetras() {
    setBotoesDisabled(false)

    handleResetaJogo()

    console.log('reseta Jogo: ', resetaJogo)

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
    if (!palavra.includes(letra)) {
      setContagemErros(prevContagemErros => prevContagemErros + 1)
    }
  }

  console.log(`Erros: ${contagemErros}`)

  return (
    <div>
      <div className="container">
        <div>
          <img
            src={imagensForca[contagemErros]}
            alt=""
            data-test="game-image"
          />
        </div>
        <div className="container-palavra ">
          <button
            className="btn-escolher"
            onClick={habilitarLetras}
            data-test="choose-word"
          >
            Escolher Palavra
          </button>
          <div
            data-test="word"
            className={`palavra ${
              perdeu || ganhou ? (perdeu ? 'vermelho' : 'verde') : ''
            }`}
          >
            {perdeu ? palavra : letrasExibidas.join(' ')}
          </div>
        </div>
      </div>

      <Letras
        setLetrasClicadas={setLetrasClicadas}
        letrasClicadas={letrasClicadas}
        disabled={perdeu || ganhou || botoesDisabled}
        onLetterClick={handleLetterClick}
      />
      <div className="container-input">
        <h2>Ja sei a palavra!</h2>
        <input disabled={inputDisabled} type="text" />
        <button>Chutar</button>
      </div>
    </div>
  )
}
