import {
  Button,
  Row, 
  Col, 
  Input, 
  FormGroup, 
  Label, 
  Form, 
  FormFeedback
} from 'reactstrap';
import { useState, useEffect } from "react";

const initialFormValue = {
  id: "",
  name: "",
  price: "",
  stock: "",
  category: ""
}

const FormEdit = ({ data, setOpen, editedDataId, setData }) => {
  const [form, setForm] = useState(initialFormValue);

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const editedData = data.map((row, index) => (
      row.id === editedDataId ? data[index] = form : { ...row }))
    setData(prev => ({...prev, data:editedData}))
    setOpen(false)
  }

  useEffect(() => {
    const editedData = data.filter(v => v.id === editedDataId)[0]
    setForm(editedData)
  }, [data, editedDataId])

  return (
    <>
      <Row>
        <Form
          onSubmit={handleSubmit}
        >
          <>
            <FormGroup>
              <Label>
                Name
              </Label>
              <Input
                value={form.name}
                type="text"
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  name: e.target.value
                }))}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                Price
              </Label>
              <Input
                value={form.price}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  price: e.target.value
                }))}
                required
              />

            </FormGroup>

            <FormGroup>
              <Label>
                Stock
              </Label>
              <Input
                value={form.stock}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  stock: e.target.value
                }))}
                required
              />
              <FormFeedback>

              </FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label>
                Category
              </Label>
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
              <Button type="submit">Submit</Button>
            </Col>
            <Col>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  )
}

export default FormEdit