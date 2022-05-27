import { React, useState } from 'react'
import { Row, Col } from 'reactstrap'
import Login from './login'
import Signup from './register'
import { Navigate } from 'react-router-dom'
import './style.scss';

const AuthPages = () => {
  const [currentContainer, setCurrentContainer] = useState(false)
  
  const isAuth = localStorage.getItem('access_token')
  if (isAuth)  return  <Navigate to="/dashboard" />;

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