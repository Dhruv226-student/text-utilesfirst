import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let upCase = text.toUpperCase();
    setText(upCase);
   text.length>0?props.showAlert("Converted to uppercase", "success"):props.showAlert("Enter the text First", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const lowerClick = () => {
    let lowCase = text.toLowerCase();
    setText(lowCase);
   text.length>0?props.showAlert("Converted to Lowercase", "success"):props.showAlert("Enter the text First", "success");

  };
  const ClearClick = () => {
    let clear = "";
    setText(clear);
 props.showAlert("Text was cleared", "success");

  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    text.length>0?props.showAlert("Speck command work sucessfully", "success"):props.showAlert("Enter the text First", "success")

  };
  const copyclick = () => {
    navigator.clipboard.writeText(text);
   text.length>0?props.showAlert("Text copy to clipboard", "success"):props.showAlert("Enter the text First", "success");

  };
  const handleSpace =() =>{
    let newtext= text.split(/[ ]+/);
    setText(newtext.join(" "));
   text.length>0?props.showAlert("Extra space are removed", "success"):props.showAlert("Enter the text First", "success");


  }

  return (
    <>
      <div className="container my-3" style={{color :props.mode === 'light' ? 'black':'white'}} >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control p-2 m-1"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor :props.mode === 'dark' ? 'gray':'white' , color :props.mode === 'light' ? 'black':'white'}}
        ></textarea>
        <button className="btn btn-info mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info  mx-2" onClick={lowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-info  mx-2" onClick={ClearClick}>
          Clear text
        </button>
        <button className="btn btn-info  mx-2" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-info  mx-2" onClick={copyclick}>
          Copy text
        </button>
        <button className="btn btn-info  mx-2" onClick={handleSpace}>
          Remove extra space
        </button>
      </div>
      <div className="container my-3" style={{color :props.mode === 'light' ? 'black':'white'}}>
        <h2>Text summery</h2>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          words and {text.length} charcter
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length >0?text:"Enter something to text box above"}</p>
      </div>
    </>
  );
}
