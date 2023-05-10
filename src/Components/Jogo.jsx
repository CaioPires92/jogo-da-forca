import React from 'react'
import Letras from './Letras'
import './Jogo.css'

export default function Jogo() {
  return (
    <div>
      <header>
        <h1>Bônus: Input de Chute</h1>
      </header>
      <div className="container">
        <div>
          <img src="assets/forca0.png" alt="" />
        </div>
        <div className="palavra">
          <button>Escolher Palavra</button>
          <dir>Palavra______</dir>
        </div>
      </div>
      <Letras />
      <div>
        <h2>Ja sei a palavra!</h2>
        <input type="text" />
        <button>Chutar</button>
      </div>
    </div>
  )
}
