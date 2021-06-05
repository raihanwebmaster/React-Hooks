import React, { useState } from "react";

const UseStateArray = () => {
  //   const bioData = [
  //     {
  //       id: 0,
  //       myName: "Raihan",
  //       age: 23,
  //     },
  //     {
  //       id: 0,
  //       myName: "Raihan Uddin",
  //       age: 24,
  //     },
  //     {
  //       id: 0,
  //       myName: "Uddin Raihan",
  //       age: 25,
  //     },
  //   ];
  const [state, setState] = useState([
    {
      id: 1,
      myName: "Raihan",
      age: 23,
    },
    {
      id: 2,
      myName: "Raihan Uddin",
      age: 24,
    },
    {
      id: 3,
      myName: "Uddin Raihan",
      age: 25,
    },
  ]);
  const clearArray = () => {
    setState([]);
  };
  return (
    <>
      {state.map((name, id) => (
        <h1 className="h1style" key={id}>
          Name: {name.myName} & Age: {name.age}
        </h1>
      ))}
      <button className="btn" onClick={clearArray}>
        Clear
      </button>
    </>
  );
};

export default UseStateArray;
