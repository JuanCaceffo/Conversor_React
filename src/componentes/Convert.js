import { useState } from "react";

const MillasToKm = (millas) => {
  const CONVETION = 1.609
  return millas * CONVETION
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
        <input autoComplete='off' value={Millas} onChange={handleInputChange}></input>
        <label>Kilometros</label>
        <label className="form-NumberKm">{MillasToKm(Millas)}</label>
      </form>
  </>
}