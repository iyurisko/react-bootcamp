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

  const [data, setData] = useState({headers:[], rows:[]});
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedDataId, setEditedDataId] = useState({})

  const handleDelete = (id) =>{
    const updatedRows = data.rows.filter( v=> id !== v.id);
    setData(prev=> ({...prev, rows: updatedRows}))
  }

  const handleEdit = (id) =>{
    setEditedDataId(id)
    setIsEditModalOpen(true)
  }

  useEffect(()=>{
    setData(jsonData)
  }, [])

  return (
    <>
      <h1> CRUD DATA</h1>
      <br/>
      <Button color="primary" onClick={()=>setIsCreateModalOpen(true)} > Add Data + </Button>
      <br/>  <br/>
      <Table>
        <thead>
          <tr>
            {data.headers.map((header, idx)=> (
              <th key={idx}>{header} </th> 
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, idx)=>(
            <tr key={idx}>
              <th scope="row">
                {idx+1}
              </th>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>{row.stock}</td>
              <td>{row.category}</td>
              <td>
                <Button onClick={()=>handleEdit(row.id)} > Edit</Button>
              </td>
              <td>
                <Button color="danger" onClick={()=>handleDelete(row.id)} > Delete</Button>
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
            data={data.rows}
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
            data={data.rows}
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