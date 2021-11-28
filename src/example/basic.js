   
const Basic = () => {

    const Text = 'Hello from React';
    const Number = 12345;
    const Array = ["arr1", "arr2", "arr3", "arr4", "arr5"]
    const ArrayOfObject = [
      { id: 1, nama: "test1" },
      { id: 2, nama: "test2" },
      { id: 3, nama: "test3" },
      { id: 4, nama: "test4" },
      { id: 5, nama: "test5" },
    ]
  
    const Ternary = true
    const valueIsNull = null;
    const valueIsUndifined = undefined;
  
    return (
      <>
        This text  : {Text}
        <br />
        {/* ==================================================== */}
        <br />
      This Number:{Number}
        <br />
        {/* ==================================================== */}
        <br />
  
        This List Array
        <br />
        {Array.map((v,idx) => (
          <div key={idx}>
            <li>{v}</li>
          </div>
        ))}
  
        <br />
        {/* ==================================================== */}
        <br />
        
        This List Array of Object
        <br />
        {ArrayOfObject.map((v, idx) => (
          <div key={idx}>
            <li> my name is {v.name} with id {v.id}</li>
          </div>
        ))}
  
        <br />
        {/* ==================================================== */}
        <br />
  
        this {valueIsNull} {valueIsUndifined}
  
        <br />
        {/* ==================================================== */}
        <br />
  
        This ternary condition
  
        {Ternary ? "Value is True" : "Value is False"}
  
      </>
    );
  }
  
  export default Basic;