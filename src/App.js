import { useState } from "react";
import "./App.css";
import HookRules from "./components/HookRules";
import FilterObject from "./components/FilterObject";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";
import ShortCirEval from "./components/ShortCirEval";
import BasicForm from "./components/From/BasicForm";
import UseEffect1 from "./components/UseEffect/UseEffect1";
import UseEffect2 from "./components/UseEffect/UseEffect2";
import UseEffectAPI from "./components/UseEffect/UseEffectAPI";
import Uncontrolled from "./components/From/Uncontrolled";
import UseReducer from "./components/UseReducer";
import ComA from "./components/useContext/ComA";
import Test from "./components/UseEffect/github/Test";
import Home from "./components/myapp/home";
import Todo from "./components/Todo/Todo";

function App() {
  const [name, setName] = useState("Raihan");
  const changeName = () => {
    // if (name === "Raihan Uddin") {
    //   setName("Raiha");
    // }else{
    //   setName("Raihan Uddin");
    // }

    name === "Raihan Uddin" ? setName("Raihan") : setName("Raihan Uddin");
  };
  return (
    <div>
      {/* <h1>{name}</h1>
      <button className="btn" onClick={changeName}>
        Click Me
      </button> */}
      {/* <HookRules/> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject /> */}
      {/* <FilterObject/> */}
      {/* <ShortCirEval/> */}
      {/* <BasicForm/> */}
      {/* <UseEffect1/> */}
      {/* <UseEffect2/> */}
      {/* <UseEffectAPI/> */}
      {/* <Uncontrolled/> */}
      {/* <UseReducer/> */}
      {/* <ComA/> */}
      {/* <Test/> */}
      {/* <Home /> */}
      <Todo/>
    </div>
  );
}

export default App;
