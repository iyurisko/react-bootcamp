import React from "react";
import { Col, Row } from "reactstrap";
import './styles.css'

const Header = () => {

  const handleLogout = () => {
    sessionStorage.removeItem('access_token');
    window.location = '/'
  }

  return (
    <div className="header">
      <Row>
        <Col md={11}>
          <h3> Mydashboard</h3>
        </Col>
        <Col md={1}>
          <span className="logout" onClick={() => handleLogout()} >  Logout </span>
        </Col>
      </Row>
    </div>
  )
}

export default Header;