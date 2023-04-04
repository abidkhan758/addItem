import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  console.log("items", items);
  return (
    <>
      <div className="main-div">
        <input
          type="text"
          placeholder="Type Here"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />

        <button onClick={addItem}>Add Item</button>
      </div>

      {items.map((v, i) => {
      return  <div className="showItem">
          <div className="eachitem">
            <h3 key={1}>
              {i+1}. {v}
            </h3>
          </div>
        </div>;
      })}
    </>
  );
};

export default Todo;
