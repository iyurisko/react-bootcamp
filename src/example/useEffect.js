
import React, { useEffect, useState } from "react"

const VolumeAirEffect = () => {
  const [gelas, setIsiGelas] = useState(0) //dalam liter
  const [perubahan, setItungPerubahan] = useState(null)
  useEffect(() => {
    setItungPerubahan(prevState => prevState + 1)
  }, [gelas])

  return (
    <div className="Name">

      Isi gelas {gelas} Liter
      <br />

      <button onClick={() => setIsiGelas(6)}> Ubah Isi Volume Jadi 6 Liter </button>

      <button onClick={() => setIsiGelas(12)}> Ubah Isi Volume Jadi 12 Liter </button>
      <br />

      Isi gelas berubah sebanyak {perubahan - 1}
      <br />
      react merender sebanyak {perubahan}
    </div>
  );
}

export default VolumeAirEffect;