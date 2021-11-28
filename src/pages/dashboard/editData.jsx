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

const FormEdit = ({ data, setOpen, editedDataId }) => {
  const [form, setForm] = useState(initialFormValue);

  const handleSubmit = (e) => {
    e.preventDefault()
    data.map((row, index) => (
      row.id === editedDataId ? data[index] = form : { ...row }))
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



// import { Button, Row, Col, Input, Table, FormGroup, Label, Form, FormFeedback } from 'reactstrap';
// import { useState, useEffect } from "react";
// const FormInput = () => {
//   const initialFormValue = {
//     name: "",
//     price: "",
//     stock: "",
//     category: ""
//   }


//   const validation = {
//     regex: {
//       name: /^\S+@\S+\.\S+$/,
//       price: /^\S+@\S+\.\S+$/,
//       stock: /^\S+@\S+\.\S+$/,
//       category: /^\S+@\S+\.\S+$/
//     },
//     message: {
//       name: "ss",
//       price: "null",
//       stock: "null",
//       category: ""
//     }
//   }

//   const [validated, setValidated] = useState(false);
//   const validationField = (key, input) => {
//     let inputField = input || ""
//     if (inputField.match(validation.regex[key]) === null) {
//       return { error: true, msg: validation.message[key] }
//     } else {
//       return { error: false, msg: "" }
//     }
//   }

//   const [form, setForm] = useState(initialFormValue)
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setValidated(true)
//     // console.log("ok", validationField())
//   }
//   const handleCancel = () => {

//   }



//   return (
//     <>
//       <Row>
//         <Form
//           noValidate={true}
//           onSubmit={handleSubmit}
//           validated={validated.toString()}
//         >
//           {Object.keys(form).map((key) => (
//             <FormGroup key={key}>
//               <Label>
//                 {key}
//               </Label>
//               <Input
//                 value={form[key]}
//                 onChange={(e) => {
//                   setForm(prev => ({
//                     ...prev,
//                     [key]: e.target.value
//                   }))

//                 }}

//                 invalid={validated && validationField(key, form[key]).error ? true : undefined}
//               />
//               <FormFeedback invalid={validated && validationField(key, form[key]).error ? true : undefined} > {validationField(key, form[key]).msg} </FormFeedback>
//             </FormGroup>

//           ))}

//           <Row>
//             <Col>
//               <Button type="submit">Submit</Button>
//             </Col>
//             <Col>
//               Cancel
//             </Col>
//           </Row>

//         </Form>


//       </Row>



//     </>
//   )
// }

export default FormEdit