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
import axios from 'axios';

const productApiURL = process.env.REACT_APP_PRODUCT_API_URL;

const FormInput = ({ action, data, setModalVisible, updateId }) => {

  const initialFormValue = {
    name: "",
    description: "",
    price: 0,
    stock: 0,
  }

  const [form, setForm] = useState(initialFormValue);
  const createData = async () => {
    await axios.post(productApiURL, form)
      .then(() => {
        data.push(form);
      })
      .catch(err => alert(err))
    setModalVisible(false);
  };

  const updatedData = async () => {
    await axios.put(`${productApiURL}/${updateId}`, form)
      .then(() => {
        const index = data.findIndex((p) => p.id === updateId)
        data[index] = form
      })
      .catch(err => alert(err))
    setModalVisible(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action === "create") return createData()
    return updatedData()
  }

  useEffect(() => {
    if (action === "edit") {
      const editData = Object.assign({}, data.find(v => v.id === updateId))
      delete editData.id
      setForm(editData)
    }
  }, [data, action, updateId])

  return (
    <>
      <Row>
        <Form onSubmit={handleSubmit}>
          <>
            {Object.keys(form).map((key, idx) => (
              <FormGroup key={idx}>
                <Label>{key}</Label>
                <Input
                  type={key === "name" || key === "description" ? "text" : "number"}
                  value={form[key]}
                  placeholder={key}
                  onChange={(e) => setForm(prev => ({
                    ...prev,
                    [key]: e.target.value
                  }))}
                  required
                />
              </FormGroup>
            ))}
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