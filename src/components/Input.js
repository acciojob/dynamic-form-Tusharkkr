import React from "react";

const Input = ({index,removeItem}) => {

    return (
        <div>
            <input type="text" />
            <button onClick={() => removeItem(index)}>Remove</button>
        </div>
    );
};

export default Input;



























// import React from "react";

// const Input = () => {

//     return (
//         <div>
//             <input type="text" />
//             <button onClick={(e) => e.target.parentElement.remove()}>Remove</button>
//         </div>
//     );
// };

// export default Input;