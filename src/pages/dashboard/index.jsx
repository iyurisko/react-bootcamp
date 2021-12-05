import React, {
  useState,
  useEffect
} from "react";
import {
  Button,
  Table
} from 'reactstrap';
import Modal from "../../component/Modal";
import FormCreate from "./createData";
import FormEdit from "./editData";
import axios from "axios";


const Dashboard = () => {

  const [data, setData] = useState({ headers: [], rows: [] });
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedDataId, setEditedDataId] = useState({})

  const handleDelete = async (id) => {
    try {
      let newData = data
      const updatedRows = data.rows.filter( v=> id !== v.id);
      newData.rows = updatedRows
      await axios.post(`http://localhost:3001/data`, (data))
      setData(prev=> ({...prev, rows: updatedRows}))
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = (id) => {
    setEditedDataId(id)
    setIsEditModalOpen(true)
  }

  const getData = async () => {
    try {
      const  {data}  = await axios.get(`http://localhost:3001/data`)
      setData(data)
    } catch (e) {
      console.log(e)
      // bisa diganti toast
    }
  }

  useEffect(() => {
    getData()
    // ... another func
  }, [])

  return (
    <>
      <h1> CRUD DATA</h1>
      <br />
      <Button color="primary" onClick={() => setIsCreateModalOpen(true)} > Add Data + </Button>
      <br />  <br />
      <Table>
        <thead>
          <tr>
            {data.headers.map((header, idx) => (
              <th key={idx}>{header} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, idx) => (
            <tr key={idx}>
              <th scope="row">
                {idx + 1}
              </th>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>{row.stock}</td>
              <td>{row.category}</td>
              <td>
                <Button onClick={() => handleEdit(row.id)} > Edit</Button>
              </td>
              <td>
                <Button color="danger" onClick={() => handleDelete(row.id)} > Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Add data Modal */}
      <Modal
        title={`Add Data`}
        isOpen={isCreateModalOpen}
        setOpen={setIsCreateModalOpen}
        children={
          <FormCreate
            setData={setData}
            data={data}
            setData={setData}
            setOpen={setIsCreateModalOpen}
          />
        }
      />

      {/* Edit data Modal */}
      <Modal
        title={`Edit Data`}
        isOpen={isEditModalOpen}
        setOpen={setIsEditModalOpen}
        children={
          <FormEdit
            data={data}
            setData={setData}
            setOpen={setIsEditModalOpen}
            editedDataId={editedDataId}
          />
        }
      />

    </>
  )
}

export default Dashboard;