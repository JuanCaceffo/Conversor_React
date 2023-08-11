import { useState } from "react";

function millasToKm(millas) {
  const CONVETION = 1.609
  return (isNaN(millas) || millas < 0) ? 'Ingrese un valor numerico positivo' : millas * CONVETION
}
export const Convert = () => {
  //hook
  const [Millas, setMilas] = useState(0)

  const handleInputChange = (event) => {
    setMilas(event.target.value)
  }

  return <>
      <form className="App-form">
        <label>Millas</label>
        <input data-testid="millas" className="App-input" autoComplete='off' value={Millas} onChange={handleInputChange}></input>
        <label>Kilometros</label>
        <label data-testid="numberKm" className="form-NumberKm">{millasToKm(Millas)}</label>
      </form>
  </>
}