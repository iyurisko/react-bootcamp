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

const FormInput = ({ formType, fetchData, setModalVisible, editedData }) => {
  
  const [name, setName] = useState("")
  const [age, setAge] = useState(0);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const form = { name, age };

    if (formType === 'create') {
      await request.post(`/employee`, form)
        .then(() => fetchData())
        .catch(err => alert(err))

    } else {
      await request.put(`/employee/${editedData.id}`, form)
        .then(() => fetchData())
        .catch(err => alert(err))
    }

    setModalVisible(false);
  }

  useEffect(() => {
    if (formType === "edit") {
      setName(editedData.name)
      setAge(editedData.age)
    }
  }, [editedData, formType])

  return (
    <>
      <Row>
        <Form onSubmit={handleSubmitForm}>
          <>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                value={name}
                placeholder="please enter name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Age</Label>
              <Input
                type="number"
                value={age}
                placeholder="Enter Age"
                onChange={(e) => setAge(e.target.value)}
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