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

const FormDashboard = ({ action, data, setModalVisible, updateId }) => {

  const initialFormValue = {
    name: "",
    description: "",
    price: 0,
    stock: 0,
  }

  const [form, setForm] = useState(initialFormValue);

  const createData = () => {
    const newData = form;
    newData["id"] = Math.random() * Date.now()
    data.push(form);
    setModalVisible(false)
  }

  const editData = () => {
    const index = data.findIndex((p) => p.id === updateId)
    data[index] = form
    setModalVisible(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "create") return createData();
    return editData()
  };

  useEffect(() => {
    if (action === "edit") {
      setForm(data.find(v => v.id === updateId))
    }
  }, [data, action, updateId])

  return (
    <>
      <Row>
        <Form onSubmit={handleSubmit}>
          <>
          {Object.keys(form).map((key, idx) => (
            <FormGroup>
              <Label>{key}</Label>
              <Input
                value={form.name}
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

export default FormDashboard;