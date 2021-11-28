import { useState } from "react";

const  Parent = ()=> {
  const  [helloChild, setHelloChild] = useState("")
  const getDataChild = (dataChild) =>{
    setHelloChild(dataChild)
  }
  return (
    <div className="Name">
      {helloChild}
      <Child dataChild={getDataChild}/>
    </div>
  );
}

const Child = ({ dataChild }) => {
    const helloChild = "hello from Child"
    return (
        <div className="Child">
            <button onClick={() => dataChild(helloChild)}>
                send data to parent
            </button>
        </div>
    );
}

export default Parent;