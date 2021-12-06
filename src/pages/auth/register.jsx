import { React } from 'react'
import { Button, Container, FormFeedback, Input } from 'reactstrap'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { authRegister } from '../../service/auth'

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().min(8).required(),
  password: yup.string().min(8).required(),
  retypePassword: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Register = ({setCurrentContainer}) => {

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

  const handleRegister = async (e) => {
    const {code, msg} = await  authRegister(formik.values)
    if(code === 200){
      setCurrentContainer(false);
      alert(msg)
    }else{
      alert(msg)   
    }
  }

  return (
    <Container className="container-register">
      <form onSubmit={formik.handleSubmit}>
        {
          Object.keys(formik.initialValues).map((key, index) => (
            <div key={index} className="row-input">
              <Input
                type={key === "password" || key === "retypePassword" ?  "password" : "text"}
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