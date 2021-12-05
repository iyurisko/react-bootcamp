import { React } from 'react'
import { Button, Container, FormFeedback, Input, Label } from 'reactstrap'
import { useFormik } from 'formik'
import * as yup from 'yup'


const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().min(8).required(),
  password: yup.string().min(8).required(),
  retypePassword: yup.string().min(8).required(),
});

const Register = ({setCurrentContainer}) => {

  const handleRegister = async (e) => {
    const { email, password, username} = formik.values
    // await axios.post(`http://localhost:3002/data`, { email, password,  username})
    // setCurrentContainer(true)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      retypePassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: () => handleRegister()
  });


  console.log(formik.initialValues)
  return (
    <Container className="container-register">
      <form onSubmit={formik.handleSubmit}>
        {
          Object.keys(formik.initialValues).map((key, index) => (
            <div className="row-input">
              <Input
                id={key}
                name={key}
                placeholder={key}
                value={formik.values[key]}
                onChange={formik.handleChange}
                invalid={formik.touched[key] && Boolean(formik.errors[key])}
              />
              {
                formik.touched[key] && Boolean(formik.errors[key]) &&
                <FormFeedback className="error-feedback">{formik.errors[key]}</FormFeedback>
              }

            </div>
          ))
        }
        <Button className="btn-submit" type="submit">
          Register
        </Button>
      </form>
    </Container >
  )
}

export default Register;