import React, { useState } from "react";
import Input from "./Input";

const Form = () => {

    let [arr,setArr] = useState([])
    
    function handleAdd(){
        setArr([...arr,""])
    }

    function removeItem(x){
        let value = arr.filter((value,index) => index!==x)
        setArr(value)
    }
    

    return (
        <div>
            {arr.length==0 && <p>No field in the form</p>}
            {arr.map((value,index)=>(
                <Input
                index = {index}
                removeItem = {removeItem}
                />
                ))}
            <button className="add" onClick={handleAdd}>Add Fields</button>
        </div>
    );
};

export default Form;






























// import React, { useState } from "react";
// import Input from "./Input";

// const Form = () => {

//     let [arr,setArr] = useState([])
    
//     function handleAdd(){
//         setArr([...arr,<Input/>])
//     }
    

//     return (
//         <div>
//             {arr.map((value,index)=>{
//                 // console.log(index)
//                 return value
//                 })}
//             <button onClick={handleAdd}>Add Fields</button>
//         </div>
//     );
// };

// export default Form;