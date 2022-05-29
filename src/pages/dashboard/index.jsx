import {
  useState,
  useEffect
} from "react";
import {
  Button,
  Row,
  Table,
  Col,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import Form from "./form";
import request from "../../request";

const Dashboard = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [formType, setFormType] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedData, setEditedData] = useState({});

  const handleCreate = () => {
    setFormType("create");
    setModalVisible(true);
  }

  const handleDelete = (id) => {
    request.delete(`/employee/${id}`)
      .then(() => fetchData())
      .catch(err => alert(err))
  }

  const handleEdit = (editedData) => {
    setEditedData(editedData);
    setFormType("edit");
    setModalVisible(true);
  }


  const fetchData = async () => {
    await request.get('/employee')
      .then((res) => {
        const { data } = res.data
        setEmployeeList(data)
      })
      .catch(err => alert(err))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="dashboard-container" style={{ margin: "0px 250px" }}>
      <h1> Employee List </h1>
      <br />
      <Row>
        <Col>
          <Button color="primary" onClick={() => handleCreate()} > Add Data + </Button>
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
                <Button onClick={() => handleEdit(row)} > Edit</Button>
                &nbsp;&nbsp;
                <Button color="danger" onClick={() => handleDelete(row.id)} > Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal Form */}

      <Modal
        isOpen={modalVisible}
        toggle={() => setModalVisible(!modalVisible)}
      >
        <ModalHeader>{`Form ${formType} Data`}</ModalHeader>
        <ModalBody>
          <Form
            formType={formType}
            fetchData={fetchData}
            setModalVisible={setModalVisible}
            editedData={editedData}
          />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Dashboard;