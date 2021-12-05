import React from 'react'
import { useParams } from 'react-router-dom'

const CatalogByID = () =>{

    const params = useParams()

    console.log(params)
    return (
        <>
        LIST CATALOG by Id {params.id}
        </>
    )
}

export default CatalogByID