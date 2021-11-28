import { useEffect, useState } from 'react'
import Basic from './basic'
import Child2Parent from './child2parent'
import Parent2Child from './parent2child'
import Context from './useContext'
import UseEffect from './useEffect'
import UseState from './useState'

const Materi = () => {
  return (
    <div style={{ margin: "0px 400px" }}>

      <h1>MATERI REACT</h1>


      <br />
      <h3>MATERI Tampilan dasar*</h3>
      <Basic />
      <br />


      ======================================================

      <br />
      <h3>MATERI CHILD TO PARENTS*</h3>
      <Child2Parent />
      <br />

      ======================================================

      <br /> <br />
      <h3>MATERI   PARENTS TO CHILD</h3>
      <Parent2Child />
      <br />

      =====================================================

      <br /><br />
      <h3>MATERI   useState</h3>
      <UseState />
      <br />

      =====================================================

      <br /><br />
      <h3>MATERI   useEffect</h3>
      <UseEffect />
      <br />

      =====================================================

      <br /><br />
      <h3>MATERI   useContext</h3>
      <Context />
      <br />


      =======================================================

      <h3>Study Case </h3>
      <p>Anda diminta membuat Login Page pada suatu web page<br />
        dengan test case bagai berikut
        <ul>
          <li> Terdapat field email dan password </li>
          <li> Apabila Pasword benar munculkan alert "login sucess" </li>
          <li> Apabila Email salah munculkan alert "email salah" </li>
          <li> Apabila password salah munculkan alert "pasword salah sebanyak ... kali" </li>
          <li> Apabila password salah  3X munculkan alert "pasword salah sebanyak 3 kali, akun anda kami tannguhkan" </li>
          <li> email=test@dev.com pass=12345  </li>

        </ul>
      </p>
      <StudyCase email={"email"} password={"123"} />

    </div>
  )
}

const StudyCase = ({ email, password }) => {

  const [valEmail, setEmail] = useState('')
  const [valPass, setPass] = useState('')
  const [countWrongPass, setCountWrongPass] = useState(0)
  const [isBlocked, setBlocked] = useState(false)

  const handleSubmit = () => {
    if (valEmail === email && password === valPass) return alert("login success")
    if (valEmail !== email) return alert("email tidak ditemukan")
    if (valEmail === email && password !== valPass && countWrongPass <= 2) {
      setCountWrongPass(countWrongPass + 1)
      return alert(`password salah sebanyak ${countWrongPass + 1}`)
    }
  }

  useEffect(() => {
    if (countWrongPass === 3) {
      setBlocked(true)
      return alert("being blocked")
    }
  }, [countWrongPass])

  console.log(countWrongPass)
  return (
    <>
      {
        isBlocked ? <div style={{ backgroundColor: "red" }}> BLOCKKED</div> :
          <>
            Email: <input value={valEmail} onChange={(e) => setEmail(e.target.value)} />
            Pasword: <input value={valPass} onChange={(e) => setPass(e.target.value)} />
            <br />
            <button onClick={() => handleSubmit()}> Submit </button>
          </>
      }
    </>
  )

}

export default Materi