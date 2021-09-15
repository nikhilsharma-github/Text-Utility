import React, { useState } from "react";

// Enable dark mode code

export default function About() {
  const [presentTheme, newTheme] = useState({
    color: "#FFEBA1",
    backgroundColor: "#071C21",
    borderRadius: "1rem",
    borderTop:"1px solid white",
  });
   
  //  if(props.Mode=="light"){
  //    newTheme({
  //      color:"black",
  //      backgroundColor:"purple"
  //    })
  //  };



  return (
    <div className="container aboutAccordionSizing" style={presentTheme}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item  " style={presentTheme}>
          <h2 className="accordion-header " id="headingOne">
            <button
              className="accordion-button aboutAccordion"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              // aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Simply add your text into the textbox and start manipulating it as
              you want <br />
              No hassle of visiting various websites for a multiple tool. <br />
              Now, Stick to it and Enjoy the tools of it.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={presentTheme}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed aboutAccordion"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              No charge for these services, its totally free and use it whenever
              you want
              <br /> Lifetime free support and updates on this tool, Feel free
              to Use.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={presentTheme}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed aboutAccordion"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Use in any Browser, of Any operating System, whichever you want to
              use.
              <br /> Supports{" "}
              <i>
                {" "}
                Google Chrome, Mozilla FireFox, Microsoft Edge, Apple Safari,
                Brave, DuckDuckGo, Opera, etc.
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
