import { useState } from "react";

export const ERROR_NEGVALUE = '<ingrese un valor positivo>'
function millasToKm(millas) {
  const CONVETION = 1.609
  return (millas<0) ? ERROR_NEGVALUE : (millas * CONVETION)
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
        <input data-testid="millas" type={"number"} className="App-input" autoComplete='off' value={Millas} onChange={handleInputChange}></input>
        <label>Kilometros</label>
        <label data-testid="numberKm" className="form-NumberKm">{millasToKm(Millas)}</label>
      </form>
  </>
}