import  {
  useState,
  useEffect
} from "react";
import {
  Button,
  Table
} from 'reactstrap';
import Modal from "../../component/Modal";
import Form from "./form";
import axios from "axios";
import request from "../../request";

const productApiURL = process.env.REACT_APP_PRODUCT_API_URL;

const Dashboard = () => {

  const [data, setData] = useState([]);
  const [actionForm, setActionForm] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const header = ['No', 'Name', 'Description', 'Price', 'Stock', 'action']

  const handleCreate = () => {
    setActionForm("create");
    setModalVisible(true);
  }

  const handleDelete = async (id) => {
    await request.delete(`${productApiURL}/${id}`)
    .then(() => {
      const updatedData = data.filter(v => id !== v.id);
      setData(updatedData)
    })
    .catch(err => alert(err))
  }

  const handleEdit = (id) => {
    setUpdateId(id)
    setActionForm("edit")
    setModalVisible(true)
  }

  const getData = () => {
    request.get('/product')
    .then(({data}) => {
      console.log(data, data)
      setData(data.data)
    })
    .catch(err => alert(err))
  }

  const handleLogout = () => {
    localStorage.removeItem('acces_token');
    window.location = '/'
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="dashboard-container">
      <h1> PRODUCT LIST </h1>
      <br />
      <Button color="primary" onClick={() => handleCreate()} > Add Data + </Button>
      <br />
      <Button color="danger" onClick={() => handleLogout()} >  Logout </Button>
      <br />  <br />
      <Table>
        <thead>
          <tr>
            {header.map((header, idx) => (
              <th key={idx}>{header} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <th scope="row">
                {idx + 1}
              </th>
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>{row.price}</td>
              <td>{row.stock}</td>
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
            data={data}
            setModalVisible={setModalVisible}
            updateId={updateId}
          />
        }
      />
    </div>
  )
}

export default Dashboard;