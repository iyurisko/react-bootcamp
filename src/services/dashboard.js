import axios from "axios";

export const Get = async () => {
    try {
        const jsonData = await axios.get(`http://localhost:3001/data`)
        return jsonData
    } catch (e) {
        console.log(e)
    }
}


// export const Post = (data) => {
//     axios.post(`http://localhost:3001/data`, (data))
// }

// export const Update = (id) => {
//     axios.put(`http://localhost:3001/data/${id}`, dataEdit)
// }

// export const Delete = () => {
//     axios.delete(`http://localhost:3001/data/${idxDel}`)
// }



