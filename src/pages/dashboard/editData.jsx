import {
  Button,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Form
} from 'reactstrap';
import React, { useState, useEffect } from "react";
import { editProducts } from '../../service/product';

const initialFormValue = {
  id: Math.random * Date.now(),
  name: "",
  price: 0,
  stock: 0,
  category: ""
}

const FormEdit = ({ data, setOpen, editedDataId, setData }) => {
  const [form, setForm] = useState(initialFormValue)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data)
    const { code, msg, products } = await editProducts(data, form, editedDataId)
    if (code === 200) {
      setData(products)
      setOpen(false)
    } else {
      alert(msg)
    }
  }

  useEffect(() => {
    const editedData = data.rows.filter((v) => v.id === editedDataId)[0]
    setForm(editedData)
  },[data, editedDataId])

  return (
    <>
      <Row>
        <Form onSubmit={handleSubmit}>
          <>
            <FormGroup>
              <Label>Name</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  name: e.target.value
                }))}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Price</Label>
              <Input
                type="number"
                value={form.price}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  price: e.target.value
                }))}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Stock</Label>
              <Input
                type="number"
                value={form.stock}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  stock: e.target.value
                }))}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Category</Label>
              <Input
                value={form.category}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  category: e.target.value
                }))}
                required
              />
            </FormGroup>
          </>
          <Row>
            <Col>
              <Button color="primary" type="submit"> Submit</Button>
            </Col>
            <Col>
              <Button onClick={() => setOpen(false)} > Cancel </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  )
}

export default FormEdit