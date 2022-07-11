// import { Alert } from "bootstrap";
import React, { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    // console.log("handleTextChange");
    setText(event.target.value)
  };
  const handleToUpperCase = () => {
    // console.log("handleToUpperCase");
    let newText= text.toUpperCase()
    setText(newText);
    props.showAlert("","Converted to Uppercase!");
  };
  const handleToLowerCase = () => {
    // console.log("handleToLowerCase");
    let newText = text.toLowerCase("");
    setText(newText);
    props.showAlert("","Converted to Lowercase!" );
  };
  const handleClearText = () => {
    // console.log("handleClearText");
    let newText = "";
    setText(newText);
    props.showAlert("","Text Cleared!");
  };
  const handleCopyText = () => {
    // console.log("handleCopyText");
    var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert( "","Copied to Clipboard!" );
  };
  const handleExtraSpace = () => {
    // console.log("handleExtraSpace");
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("","Extra spaces removed!");
  }; 

  return (
    <div>
     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleTextChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToUpperCase}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToLowerCase}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
      <div className="container my-3">
        <ul className="list-group">
         <h2>
         <li className="list-group-item">Total Words {text.split(" ").length}</li>
         </h2>
         <h2>
          <li className="list-group-item">Total Character {text.length}</li>
          </h2> 
        </ul>
      </div>
    </div>
  );
};

export default Textform;
// style={{color: props.mode==='dark'?'white':'#042743'}}