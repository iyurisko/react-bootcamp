import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Card, Label } from 'reactstrap';

const productApiURL = process.env.REACT_APP_PRODUCT_API_URL;

const CatalogByID = () => {
  const params = useParams()
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.get(`${productApiURL}/${params.id}`)
      .then((res) => {
        setData(res.data)
      })
      .catch(err => alert(err))
  }

  useEffect(() => {
    getData()
    // ... another func
  }, [])

  return (
    <>
      <Card>
        example Catalog By ID
        <Label>{data.name}</Label>
        <Label>{data.price}</Label>
        <Label>{data.stock}</Label>
        <Label>{data.category}</Label>
      </Card>
    </>
  )
}

export default CatalogByID