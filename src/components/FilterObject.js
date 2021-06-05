import React, { useState } from "react";

const FilterObject = () => {
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
  const removeObject = (id) => {
    // alert(id);
    // console.log(id);
    const newState = state.filter((person) => person.id !== id);
    setState(newState);
  };
  return (
    <>
      {state.map((name) => {
        return (
          <h1 className="h1style" key={name.id}>
            Name: {name.myName} & Age: {name.age}
            <button className="btnInner" onClick={() => removeObject(name.id)}>
              Remove
            </button>
          </h1>
        );
      })}
      <button className="btn" onClick={clearArray}>
        Clear
      </button>
    </>
  );
};

export default FilterObject;
