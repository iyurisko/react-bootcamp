import { React, useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import Login from './login'
import Signup from './register'
import { useNavigate } from 'react-router-dom'

const AuthPages = () => {
  const navigate = useNavigate()
  const [currentContainer, setCurrentContainer] = useState(false)

  useEffect(() => {
    // cek jika user sudah terotentikasi
    let isAuth = sessionStorage.getItem('logged')
    if (isAuth) {
      //arahkan user kembali ke dashboard jika sudah login
      navigate({ pathname: './dashboard' }) 
    }
  }, [navigate])

  return (
    <div className={`auth-pages`}>
      <Row>
        <Col md="12" lg="6" >
          <div className="background bg-left">
            <p>This is</p>
            <p>React.js</p>
            <p>Crud</p>
            <p>App</p>
            <hr />
          </div>
        </Col>
        <Col md="12" lg="6">
          <div className="card-auth-page">
              <div className={`card-inner`}>
                {
                  currentContainer ?
                    <div className={`card-register `}>
                      <h3>Sign up</h3>
                      <Signup setCurrentContainer={setCurrentContainer} />
                      <button className="btn-chang-container" onClick={() => setCurrentContainer(false)}> Sudah punya Akun?</button>
                    </div> :
                    <div className={`card-login`}>
                      <h3>Login</h3>
                      <Login />
                      <button className="btn-chang-container"  onClick={() => setCurrentContainer(true)}>Daftar</button>
                    </div>
                }
              </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default AuthPages;