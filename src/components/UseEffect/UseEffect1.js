import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `Chats(${count})`;
    } else {
      document.title = `Chats`;
    }
  }, [count]);
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

export default UseEffect1;
