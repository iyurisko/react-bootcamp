import { React, useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import Login from './login'
import Signup from './register'
import { useNavigate } from 'react-router-dom'

const AuthPages = () => {
  const navigate = useNavigate()
  const [currentContainer, setCurrentContainer] = useState(false)

  useEffect(() => {
    let isAuth = sessionStorage.getItem('logged')
    if (isAuth) {
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
                      <button className="btn-chang-container" onClick={() => setCurrentContainer(false)}> Already have account?</button>
                    </div> :
                    <div className={`card-login`}>
                      <h3>Login</h3>
                      <Login />
                      <button className="btn-chang-container"  onClick={() => setCurrentContainer(true)}>Create Account</button>
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