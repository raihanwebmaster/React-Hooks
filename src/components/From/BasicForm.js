import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    // const newData = { email:email, password : email};
    if (password && email) {
      const newData = { id: Math.random().toString(), email, password };
      setData([...data, newData]);
      setEmail("");
      setPassword("");
    } else {
      alert("plz fill the data");
    }
  };
  console.log(data);
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        {data.map((personLogin) => {
          return (
            <div className="showDataStyle" key={personLogin.id}>
              <p>{personLogin.email}</p>
              <p>{personLogin.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BasicForm;
