import React, { useState } from 'react';
export default function Textform(props) {
  const handleUpClick = () => {
    console.log('Uppercase was clicked' + text);
    let n = text.toUpperCase();
    setText(n);
    props.showAlert('converted to upper case', 'Success');
   
  };
  const handleLoClick = () => {
    console.log('Lowercase was clicked' + text);
    let n = text.toLowerCase();
    setText(n);
  };
  const handleClearClick = () => {
    let n = ' ';
    setText(n);
  };
  const handleEmailExtract = () => {
    //const passedText = event.clipboardData.getData('text');

    let collectedEmails = text.match(/[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/g);
    console.log(collectedEmails);
    setText(collectedEmails);
  };
  const handleReverse = (event) => {
    let strArr = text.split('');
    console.log(strArr);
    strArr = strArr.reverse();
    let newText = strArr.join();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log('On change');
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const [text, setText] = useState('Enter text here2');
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Upper Case
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear text
        </button>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleReverse}>
        Word Reverse
      </button>
      <button
        className="btn btn-primary mx-2 my-2"
        onClick={handleEmailExtract}
      >
        EMail Extract
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
        Copy Text
      </button>
      <div className="container">
        <h2>Summary</h2>
        <p>
          {text.split(' ').length}words and {text.length}charcters and the user
          can read it in {(1 / 125) * text.split(' ').length} minutes.
        </p>
      </div>
    </div>
  );
}
