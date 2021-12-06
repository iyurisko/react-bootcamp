import axios from "axios"

export const authLogin = async (req) => {
  try {
    const { email, password } = req
    const { data } = await axios.get(`http://localhost:3002/data`)  // get all data dari DB

    const user = data.filter(v => v.email === email && v.password === password) || []//cek bila ada data yang sama
    if (user.length > 0) return { code: 200, status: "success", data, msg: "login sukses" }
    return { code: 404, status: "not found", data: null, msg: "User not found" }
  } catch (e) {
    return { code: 400, status: "error", data: null, msg: "Service Error" }
  }
}

export const authRegister = async (req) => {
  try {
    const { email, password, username } = req
    const { data } = await axios.get(`http://localhost:3002/data`)  // get all data dari DB
    const user = data.filter(v => v.email === email || v.username === username)   // cek jika data ada

    if (user.length > 0) {
      return { code: 409, status: "conflict", msg: "User already exist" }
    } else {
      const id = Math.random() * Date.now();
      await axios.post(`http://localhost:3002/data`, { id, email, password, username });
      return { code: 200, status: "success", msg: "register sukses" }
    }
  } catch (e) {
    return { code: 400, status: "error", msg: "Service Error" }
  }
}