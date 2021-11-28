import { 
  useState, 
  useEffect } from "react";
import { Button, 
  Row, 
  Col
 } from 'reactstrap';
import Modal from "../../component/Modal";
import jsonData from "../../db/products.json"
import FormCreate from "./createData";
import Table from './table'



const Dashboard = () => {
  const [data, setData] = useState({ headers: [], rows: [] });
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

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
      <Table
        setData={setData}
        data={data}
      />

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
    </>
  )
}

export default Dashboard;