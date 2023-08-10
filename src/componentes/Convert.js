import { useState } from "react";

export const MillasToKm = ({}) => {
  return <>
    
  </>
}
export const Convert = () => {
  //hook
  const [Millas, setMilas] = useState(0)

  const handleInputChange = (event) => {
    setMilas(event.target.value)
  }
  return <>
    <form className="App-from">
      <label>Millas</label>
      <input autoComplete='off' value={Millas} onChange={handleInputChange}></input>
      <label>Km</label>
      <p>{(Number(Millas) * 1.609)}</p>
    </form>
  </>
}