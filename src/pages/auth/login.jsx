import { React } from 'react'
import { Button, Container, FormFeedback, Input } from 'reactstrap'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email salah"),
  password: yup.string().min(8).required(),
});

const Login = () => {

  const handleLogin = async (e) => {
    const { email, password } = formik.values
    let { data } = await axios.get(`http://localhost:3002/data`)
    let user = data.filter(v => v.email === email && v.password === password)

    if (user.length > 0) {
      sessionStorage.setItem('logged', true)
      window.location = '/dashboard'
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: () => handleLogin()
  });

  return (
    <Container className="container-login">
      <form onSubmit={formik.handleSubmit}>
        {
          Object.keys(formik.initialValues).map((key, index) => (
            <div key={index} className="row-input">
              <Input
                type={key === "password" ? "password" : "text"}
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
          Login
        </Button>
      </form>
    </Container >
  )
}

export default Login;