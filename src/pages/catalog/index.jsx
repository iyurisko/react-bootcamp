import React, { useState, useEffect } from 'react'
import { getProducts } from '../../service/product'
import { Button, Col, Label, Row } from 'reactstrap'


const Catalog = () => {

  const [data, setData] = useState({ headers: [], rows: [] });

  const getData = async () => {
    const { code, products, msg } = await getProducts()
    if (code === 200) {
      setData(products)
    } else {
      alert(msg)
    }
  }

  useEffect(() => {
    getData()
    // ... another func
  }, [])


  return (
    <div className="catalog-pages">
      GET ALL LIST CATALOG
      <Row>
        {data.rows.map((row, idx) => (
          <Col md={3}>
            <div className="card">
              <Row>
                <img
                  src={`https://loremflickr.com/390/200/${row.name}`} width={390} height={200} alt={idx} />
              </Row>

              <Row className="mt-2 p-2 ">
                <Col md={7}>
                  <Label className="label-name">{row.name}</Label>
                  <br />
                  <Label className="label-desc">Lorem ipsum dolor sit amet</Label>
                </Col>
                <Col md={5}>
                  <Label className="label-price"> {`$ ${row.price}`}</Label>
                </Col>
              </Row>
              <div className="m-2">
                <Label className="m-0 ">Color:</Label>
                <div style={{ margin: "0 auto" }}>
                  <span>
                    {["red", "green", "blue"].map((v, idx) => (
                      <Button style={{ backgroundColor: v }} key={idx} className="color" ></Button>
                    ))}
                  </span>
                </div>
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