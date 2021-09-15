import React, { useState } from "react"; //Importing react and useState.

import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // setText("New TextBox value");s
  // let WRC = 0.008 * 60 * text.split(" ").length * 0.6;
  let WRC = (text.length / 5 / 40) * 60;

  WRC = WRC.toFixed(0);

  const handleUpClick = () => {
    // console.log("UpperCase button was clicked");
    // setText("You have clicked on uppercase button");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UPPER CASE", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);

    props.showAlert("Converted To lower case", "success");
  };
  const handleOnChange = (event) => {
    console.log("UpperCase button was clicked");
    setText(event.target.value);
  };
  const handleTextClear = () => {
    setText("");
    props.showAlert("Cleared the Text", "success");
  };
  const handleTitleText = () => {
    let newText = text.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
    setText(newText);
    props.showAlert("Converted To Title Case", "success");
  };

  const handleTextCopy = () => {
    var text = document.querySelector("#myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();

    props.showAlert("Copied Text To ClipBoard", "success");
  };

  const handleRemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces From Text", "success");
  };

  return (
    <div className="textform-sizing">
      <div className="container ">
        <h1 className="textForm-titles ">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            onChange={handleOnChange}
            className="form-control textBox-text"
            value={text}
            id="myBox"
            rows="8"
            style={{ backgroundColor: "#C7FFD8" }}
            placeholder="First Enter your Text Here to Enable Tools"
          ></textarea>
        </div>
        <div className="buttonBackground">
          <button
            disabled={text.length === 0}
            className="btn btn-success mx-1 my-1  buttonBorder "
            onClick={handleUpClick}
          >
            Convert To UPPER CASE
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-success mx-1 my-1  buttonBorder"
            onClick={handleLowClick}
          >
            Convert To lower case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-success  mx-1 my-1 buttonBorder"
            onClick={handleTitleText}
          >
            Convert To Title Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-outline-danger m-2 buttonBorder"
            onClick={handleTextClear}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-outline-warning mx-1 my-1 buttonBorder"
            onClick={handleTextCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-outline-secondary mx-1 my-1 buttonBorder"
            onClick={handleRemoveExtraSpace}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container">
        <div className="textSummary">
          <h1 >Your Text Summary</h1>
          <p>
            {text.length} Characters and{" "}
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words
          </p>
          <p>
            {" "}
            On Average, {WRC} Seconds will be taken to Type this text At 40 WPM
          </p>
        </div>

        <div className="previewDark">
          <h2 className="previewSize">Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Nothing to Preview, First Enter the text above to preview it. "}
          </p>
        </div>
      </div>
    </div>
  );
}

// PropType
TextForm.propTypes = {
  title: PropTypes.string,
};

//Default Prop
TextForm.defaultProps = {
  title: "Enter your text to Analyze",
};
