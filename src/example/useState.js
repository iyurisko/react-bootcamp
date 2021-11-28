import React, {useState} from "react"

const VolumeAir = () => {
  const [gelas, setIsiGelas] = useState(0) //dalam liter
  return (
      <div className="Name">

        Isi gelas {gelas} Liter
        <br/>
        <button onClick={()=>setIsiGelas(6)}> Ubah Isi Volume Jadi 6 Liter </button>

      </div>
  );
}

export default VolumeAir;