import React, { useState } from "react";

// react spread operator
const UseStateObject = () => {
  const [myObject, setMyObject] = useState({
    myName: "Raihan",
    myAge: 22,
    degree: "CSE",
  });
  const changeObject = () => {
    setMyObject({ ...myObject, myName: "Raihan Uddin" });
  };
  return (
    <div>
      <h1 className="h1style">
        Name: {myObject.myName} & Age:{myObject.myAge} & Degree:
        {myObject.degree}{" "}
      </h1>
      <button className="btn" onClick={changeObject}>
        Update
      </button>
    </div>
  );
};

export default UseStateObject;
