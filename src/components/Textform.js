
import { Alert } from "bootstrap";
import React, { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");

  const handleUpper = (event) => {
    // console.log("handleUpper");
    setText(event.target.value);
    alert("Remove Space")
  };
  const handleToUpperCase = () => {
    // console.log("handleToUpperCase");
    let newText = text.toUpperCase("");
    setText(newText);
    alert("Remove Space")
  };
  const handleToLowerCase = () => {
    // console.log("handleToLowerCase");
    let newText = text.toLowerCase("");
    setText(newText);
    alert("Remove Space")
  };
  const handleClearText = () => {
    // console.log("handleClearText");
    let newText = "";
    setText(newText);
    alert("Remove Space")
  };
  const handleCopyText = () => {
    // console.log("handleCopyText");
    var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      alert("Remove Space")
  };
  const handleExtraSpace = () => {
    // console.log("handleExtraSpace");
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    alert("Remove Space")
  }; 

  return (
    <div>
    <Alert/>
      <div>
          
        <div className="mb-3">
          <h3>
            <label htmlFor="myBox" className="form-label">
              {props.title}
            </label>
          </h3>
          <textarea
            className="form"  style={{width: "1300px"}}
            id="myBox"
            value={text}
            rows="8"
            onChange={handleUpper}
          ></textarea>
        </div>
        
        <button
          type="button"
          className="btn btn-outline-primary mx-2"
          onClick={handleToUpperCase}
        >
          Capital Later
        </button>
        <button
          type="button"
          className="btn btn-outline-primary mx-2"
          onClick={handleToLowerCase}
        >
          Small Later
        </button>
        <button
          type="button"
          className="btn btn-outline-primary mx-2"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          type="button"
          id="myBox"
          className="btn btn-outline-primary mx-2"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-outline-primary mx-2"
          onClick={handleExtraSpace}
        >
          Remove Space
        </button>
      </div>
      <div className="container my-3">
        <ul className="list-group">
         <h2>
         <li className="list-group-item">{text.split(" ").length} Total Words</li>
         </h2>
         <h2>
          <li className="list-group-item">{text.length} Total Character </li>
          </h2> 
        </ul>
      </div>
    </div>
  );
};

export default Textform;
