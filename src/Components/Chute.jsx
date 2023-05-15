import { useState } from 'react'

export default function Chute(props) {
  const [inputValue, setInputValue] = useState('')
  const [acertou, setAcertou] = useState(false)
  const [errou, setErrou] = useState(false)

  function chutar() {
    if (inputValue === props.palavra) {
      setAcertou(true)
    } else {
      setErrou(true)
    }
  }

  return (
    <div className="container-input">
      <h2>Ja sei a palavra!</h2>
      <input
        onChange={event => setInputValue(event.target.value)}
        disabled={props.inputDisabled || acertou || errou}
        type="text"
      />
      <button onClick={chutar} disabled={acertou || errou}>
        Chutar
      </button>
      <div>{inputValue}</div>
      {acertou && <div className="verde">Você acertou a palavra!</div>}
      {errou && <div className="vermelho">Você errou a palavra!</div>}
    </div>
  )
}
