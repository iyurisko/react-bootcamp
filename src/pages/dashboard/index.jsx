import {
  useState,
  useEffect
} from "react";
import {
  Button,
  Row,
  Table,
  Col
} from 'reactstrap';
import Modal from "../../component/Modal";
import Form from "./form";
import request from "../../request";

const productApiURL = process.env.REACT_APP_PRODUCT_API_URL;

const Dashboard = () => {

  const [employeeList, setEmployeeList] = useState([]);
  const [actionForm, setActionForm] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const header = ['No', 'Name', 'Age', 'Action']

  const handleCreate = () => {
    setActionForm("create");
    setModalVisible(true);
  }

  const handleDelete = (id) => {
    request.delete(`/employee/${id}`)
      .then((res) => {
        const updatedData = employeeList.filter(v => id !== v.id);
        setEmployeeList(updatedData)
      })
      .catch(err => alert(err))
  }

  const handleEdit = (id) => {
    setUpdateId(id)
    setActionForm("edit")
    setModalVisible(true)
  }


  const handleLogout = () => {
    localStorage.removeItem('access_token');
    window.location = '/'
  }

  const getData = async () => {
    await request.get('/employee')
    .then((res) => {
      const { data } = res.data
      setEmployeeList(data)
    })
    .catch(err => alert(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="dashboard-container" style={{margin: "0px 250px"}}>
      <h1> Employee List </h1>
      <br />
      <Row>
        <Col>
          <Button color="primary" onClick={() => handleCreate()} > Add Data + </Button>
          &nbsp;
          <Button color="danger" onClick={() => handleLogout()} >  Logout </Button>
        </Col>
      </Row>
      <br />  <br />
      <Table width={250}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((row, idx) => (
            <tr key={idx}>
              <th scope="row">
                {idx + 1}
              </th>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>
                <Button onClick={() => handleEdit(row.id)} > Edit</Button>
                &nbsp;&nbsp;
                <Button color="danger" onClick={() => handleDelete(row.id)} > Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal Form */}
      <Modal
        title={`Form ${actionForm} Data`}
        isOpen={modalVisible}
        setOpen={setModalVisible}
        children={
          <Form
            action={actionForm}
            data={employeeList}
            setModalVisible={setModalVisible}
            updateId={updateId}
          />
        }
      />
    </div>
  )
}

export default Dashboard;