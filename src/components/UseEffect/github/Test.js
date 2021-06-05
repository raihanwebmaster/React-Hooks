import React, { useEffect, useState } from "react";
import UseTitleCount from "./UseTitleCount";

const Test = () => {
  const [count, setCount] = useState(0);
  // custom hook
  UseTitleCount(count);
  console.log("Raihan onek ");
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
};

export default Test;
