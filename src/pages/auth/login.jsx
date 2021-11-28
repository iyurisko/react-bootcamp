import { React } from 'react'
import { Button, Container, FormFeedback, Input } from 'reactstrap'
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const Login = () => {

  const handleLogin = async (e) => {
    alert("oke")
    console.log(e);
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
          Login
        </Button>
      </form>

    </Container >
  )
}

export default Login;