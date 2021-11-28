import React,  { createContext, useContext, useState } from "react"

const helloContext = createContext("")

const Parent = () => {
  const hello = "hello from Parents"

  const [value, setValue] = useState("")

  return (
    <div className="Name">
      <helloContext.Provider value={{ hello, value, setValue }}>
        <ChildA hay={hello} />
      </helloContext.Provider>

    </div>
  );
}

const ChildA = ({ hay }) => {
  const { hello, } = useContext(helloContext)
  return (
    <div className="Child">

      this from child A, Parents say "{hello}"
      <br />
      ----------------------------------------------------------------------

      <ChildB />
    </div>
  );
}

const ChildB = ({ hay }) => {
  const { value } = useContext(helloContext)
  return (
    <div className="Child">
      this from child B, Value is {value}
      <br />
      ------------------------------------------------------------------------
      <ChildC />

    </div>
  );
}

const ChildC = () => {
  const { hello, value, setValue } = useContext(helloContext)
  return (
    <div className="Child">
      this from child C, Parents say {hello}
      <br />
      value  = {value}
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)} />


    </div>
  );
}


export default Parent;

// import {createContext, useContext} from "react"

// const helloContext = createContext("")

// const Parent = () => {
//   const hello = "hello from Parents"

//   return (
//       <div className="Name">
//         <helloContext.Provider value={hello}>
//           <Child2 hay={hello} />
//           </helloContext.Provider>

//       </div>
//   );
// }


// const Child2 = ({ hay }) => {
//   return (
//       <div className="Child">
//             <Child3  />
//       </div>
//   );
// }


// const Child3= ({ hay }) => {
//   return (
//       <div className="Child">
//           <Child4  />
//       </div>
//   );
// }


// const Child4= () => {
//   const parent = useContext(helloContext)
//   return (
//       <div className="Child">
//         this child 4  Parents say {parent}
//       </div>
//   );
// }


// export default Parent;