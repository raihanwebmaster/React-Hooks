import React, { useEffect, useState } from "react";
import todo from "../images/todo.svg";
import "../../App.css";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("plz fill data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );

      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      const allInputData = { id: Math.random().toString(), name: inputData };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const newItems = items.filter((it) => it.id !== id);
    setItems(newItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  const editItem = (id) => {
    let newEditItems = items.find((it) => it.id === id);
    setToggleSubmit(false);
    setInputData(newEditItems.name);
    setIsEditItem(id);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todo logo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add Item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="fa fa-edit add-btn"
                title="Update Item"
                onClick={addItem}
              ></i>
            )}
          </div>
          <div className="showItems">
            {items.map((item) => {
              return (
                <div className="eachItem" key={item.id}>
                  <h3>{item.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => editItem(item.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(item.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
