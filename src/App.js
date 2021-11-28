import Basic from './example/basic'
import Child2Parent from './example/child2parent'
import Parent2Child from './example/parent2child'
import UseState from './example/useState'
import Context from './example/useContext'
import UseEffect from './example/useEffect'

// import StudyCase from './example/studycase'

const App = () => {
  return (
    <div style={{ margin: "0px 200px" }}>

      <h1>MATERI REACT</h1>


      <br />
      <h3>MATERI Tampilan dasar*</h3>
      <Basic />
      <br />


      ======================================================

      <br /> <br />
      <h3>MATERI   PARENTS TO CHILD</h3>
      <Parent2Child />
      <br />

      =====================================================

      <br />    <br />
      <h3>MATERI CHILD TO PARENTS*</h3>
      <Child2Parent />
      <br />

      ======================================================



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

      <br /><br />
      <h3>StudyCase</h3>

      <p>Anda diminta membuat Login Page pada suatu web page dengan test case bagai berikut</p>
      <ul>
        <li> Terdapat field email dan password </li>
        <li> Apabila Pasword benar munculkan alert "login sucess" </li>
        <li> Apabila Email salah munculkan alert "email salah" </li>
        <li> Apabila password salah munculkan alert "pasword salah sebanyak ... kali" </li>
        <li> Apabila password salah  3X munculkan alert "pasword salah sebanyak 3 kali, akun anda kami tannguhkan" </li>
        <li> email=test@dev.com pass=12345  </li>

      </ul>


      {/* <StudyCase email={"email"} password={"123"} /> */}
      <br />
    </div>
  )
}


export default App