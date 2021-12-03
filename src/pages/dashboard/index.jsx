import {
  useState,
  useEffect
} from "react";
import {
  Button,
  Row,
  Col,
  Table
} from 'reactstrap';
import Modal from "../../component/Modal";
import jsonData from "../../db/products.json"
import FormCreate from "./createData";
import FormEdit from "./editData";

const Dashboard = () => {
  const [data, setData] = useState({ headers: [], rows: [] });
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editedDataId , setEditDataId] = useState({})

  const handleDel = (id) => {
    const updatedRows = data.rows.filter(v => id !== v.id)
    setData(prev => ({...prev, rows:updatedRows}))
  }

  const handleEdit = (id) =>{
    setEditDataId(id)
    setEditModalOpen(true)
  }

  useEffect(
    () => {
      setData(jsonData)
    }, []
  )

  return (
    <>
      <h1> CRUD DATA</h1>
      <br />
      <Row>
        <Col md={2}>
          <Button color="primary" onClick={() => setCreateModalOpen(true)} > Create Data </Button>
        </Col>
      </Row>
      <br />

      {/* Table */}
      <Table>
        <thead>
          <tr>
            {data.headers.map((header, index) => (<th key={index}>{header}</th>))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={row.id}>
              <th scope="row">
                {index + 1}
              </th>
              <td> {row.name} </td>
              <td> {row.price} </td>
              <td> {row.stock} </td>
              <td> {row.category} </td>
              <td>
                <Button onClick={() => handleEdit(row.id)}>Edit</Button>
              </td>
              <td>
                <Button  type="submit" onClick={() => handleDel(row.id)} > Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal Create Form */}
      <Modal
        title={`Create Data`}
        isOpen={isCreateModalOpen}
        setOpen={setCreateModalOpen}
        children={
          <FormCreate
            setData={setData}
            data={data.rows}
            setOpen={setCreateModalOpen}
          />
        }
      />

      {/* Modal Edit Form */}
      <Modal
        title={`Edit Modal`}
        isOpen={isEditModalOpen}
        setOpen={setEditModalOpen}
        children={
          <FormEdit
            data={data.rows}
            setOpen={setEditModalOpen}
            setData={setData}
            editedDataId={editedDataId}
          />
        }
      />
    </>
  )
}

export default Dashboard;