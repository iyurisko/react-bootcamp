import { React } from 'react'
import { Button, Container, FormFeedback, Input } from 'reactstrap'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

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
    const { email, password, username} = formik.values;  
    const { data } = await axios.get(`http://localhost:3002/data`)  // get User from db
    const user = data.filter(v => v.email === email || v.username === username)  
  
    if(user.length > 0){
      alert("user sudah digunakan")
    }else{
      const id =  Math.random() * Date.now();
      await axios.post(`http://localhost:3002/data`, { id, email, password,  username});
      setCurrentContainer(false);
      alert("akun berhasil dibuat, silahkan login")
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