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
import request from '../../request';

const FormInput = ({ action, data, setModalVisible, updateId }) => {

  const initialFormValue = {
    name: "",
    age: 0,
  }

  const [form, setForm] = useState(initialFormValue);
  const createData = async () => {
    await request.post(`/employee`, form)
      .then((res) => {
        data.push(res.data.data);        
      })
      .catch(err => alert(err))
    setModalVisible(false);
  };

  const updatedData = async () => {
    await request.put(`/employee/${updateId}`, form)
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
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                value={form.name}
                placeholder="please enter name"
                onChange={(e) => setForm(prev =>
                  ({ ...prev, name: e.target.value })
                )}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Age</Label>
              <Input
                type="number"
                value={form.age}
                placeholder="Enter Age"
                onChange={(e) => setForm(prev =>
                  ({ ...prev, age: e.target.value })
                )}
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