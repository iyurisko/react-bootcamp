import React, { useState, useEffect } from 'react'
import { Button, Col, Label, Row } from 'reactstrap'
import axios from 'axios';

import './style.scss'

const productApiURL = process.env.REACT_APP_PRODUCT_API_URL;

const Catalog = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios.get(`${productApiURL}`)
      .then((res) => {
        setData(res.data)
      })
      .catch(err => alert(err))
  }

  useEffect(() => {
    getData()
    // ... another func
  }, [])


  return (
    <div className="catalog-pages">
      Example get all list catalog
      <Row>
        {data.map((row, idx) => (
          <Col key={idx} sm={12} md={4}>
            <div className="card">
              <Row>
                <img
                  src={`https://loremflickr.com/390/200/${row.name}`} width={390} height={200} alt={idx} />
              </Row>
              <Row>
                <Label className="label-name">{row.name}</Label>
              </Row>
              <Row>
                <Label className="label-price"> {`$ ${row.price}`}</Label>
              </Row>
              <div className="m-2">
                <Button className="btn-add"> + Add To Card </Button>
              </div>
            </div>
          </Col>
        ))
        }
      </Row>
    </div >
  )
}

export default Catalog