import React, { useRef, useState } from "react";

const Uncontrolled = () => {
  // it like a userState only and its preserve the value . No rerender.
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("pls fill the data") : setShow(true);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyName">Enter your luckyName</label>
          <input type="text" id="luckyName" ref={luckyName} />
        </div>
        <br />
        <button>Submit</button>
        <p>{show ? `your lucky name is ${luckyName.current.value}` : ""}</p>
      </form>
    </div>
  );
};

export default Uncontrolled;
