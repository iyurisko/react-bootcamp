import { useState } from "react";
import { Button, Table } from 'reactstrap';
import Modal from "../../component/Modal";
import FormEdit from './editData'

const TableCRUD = ({data, setData}) => {
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

  return (
    <>
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

      <Modal
        title={`Edit Modal`}
        isOpen={isEditModalOpen}
        setOpen={setEditModalOpen}
        children={
        <FormEdit
        data={data.rows}
        setOpen={setEditModalOpen}
        editedDataId={editedDataId}
        />
        }
      />
    </>
  )

}

export default TableCRUD