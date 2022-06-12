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

const FormInput = ({ type, refetch, setVisible, formEdited }) => {
  
  const [name, setName] = useState("")
  const [age, setAge] = useState(0);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const form = { name, age };

    if (type === 'create') {
      await request.post(`/employee`, form)
        .then(() => refetch())
        .catch(err => alert(err))

    } else {
      await request.put(`/employee/${formEdited.id}`, form)
        .then(() => refetch())
        .catch(err => alert(err))
    }

    setVisible(false);
  }

  useEffect(() => {
    if (type === "edit") {
      setName(formEdited.name)
      setAge(formEdited.age)
    }
  }, [formEdited, type])

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
              <Button onClick={() => setVisible(false)} > Cancel </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  )
}

export default FormInput