// import React, { useState } from 'react'

// const UseReducer = () => {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <p>{count}</p>
//             <div className="btnStylePosition">
//                 <button onClick={() => setCount(count + 1)}>Inc</button>
//                 <button onClick={() => setCount(count - 1)}>Dec</button>
//             </div>
//         </div>
//     )
// }

// export default UseReducer

import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};
const initialState = 0;

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <p>{state}</p>
        <div className="btnStylePosition">
          <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
