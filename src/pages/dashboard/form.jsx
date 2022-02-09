import React, { useState, useEffect } from 'react';
import {
  Button,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Form
} from 'reactstrap';
import { createProducts } from '../../service/product';

const initialFormValue = {
  id: Math.random() * Date(),
  name: "",
  description: "",
  price: 0,
  stock: 0,
}

const FormInput = ({ action, data, setData, setModalVisible, updateId }) => {

  const [form, setForm] = useState(initialFormValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "create") {
      const { code, products, msg } = await createProducts(data, form)
      if (code === 200) {
        setData(products)
        setOpen(false);
      } else {
        alert(msg)
      }
    } else {
      const { code, products, msg } = await editProducts(data, form)
      if (code === 200) {
        setData(products)
        setOpen(false);
      } else {
        alert(msg)
      }
    }
  };

  useEffect(() => {
    if (action === "edit") setForm(data.find(v => v.id === updateId))
  }, [data, action, updateId])

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
              <Label>Category</Label>
              <Input
                value={form.description}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  description: e.target.value
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
          </>
          <Row>
            <Col>
              <Button color="primary" type="submit"> Submit</Button>
            </Col>
            <Col>
              <Button onClick={() => setModalVisible(false)} > Cancel </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  )
}

export default FormInput