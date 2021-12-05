import { React, useState } from 'react'
import { Card, Row, Col } from 'reactstrap'
import Login from './login'
import Signup from './register'

const AuthPages = () => {

  const [currentContainer, setCurrentContainer] = useState(false)

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
                      <a href="!#" onClick={() => setCurrentContainer(false)}> Already have account?</a>
                    </div> :
                    <div className={`card-login`}>
                      <h3>Login</h3>
                      <Login />
                      <a href="!#" onClick={() => setCurrentContainer(true)}>Create Account</a>
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