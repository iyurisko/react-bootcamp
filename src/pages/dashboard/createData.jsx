import {
  Button,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Form
} from 'reactstrap';
import React, { useState } from "react";
import axios from 'axios';

const initialFormValue = {
  id: Math.random() * Date.now(),
  name: "",
  price: 0,
  stock: 0,
  category: ""
}

const FormInput = ({ data, setOpen }) => {
  const [form, setForm] = useState(initialFormValue)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let newData = data
      newData.rows.push(form)
      await axios.post(`http://localhost:3001/data`, (newData))
      setOpen(false);
    } catch (error) {
      console.log(error)
    }
  }

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

export default FormInput