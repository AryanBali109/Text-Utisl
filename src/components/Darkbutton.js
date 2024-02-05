import { useState } from "react";
import React from "react";
// import Navbar from "./Navbar";
// import TextForm from "./TextForm";

export default function Darkbutton() {
  const [on, off] = useState("🌑");
  const [mystyle, setmystyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  // const
  // let co ={
  //   color:'black'
  // }
  let rad = () => {
    if (mystyle.color === "black") {
      setmystyle({
        backgroundColor: "black",
        color: "white",
      });
      off("☀️");
    } else {
      setmystyle({
        backgroundColor: "white",
        color: "black",
      });
      off("🌑");
    }
  };

  return (
    <div className="container">
      <h2 className="container my-2">About</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              style={mystyle}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>It is create to analyze your text.</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              style={mystyle}
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>Text utisli is free to use.</strong> No hidden charges
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              style={mystyle}
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>Text utsisil is a browser compatible website.</strong> you can use it in any browser
            </div>
          </div>
        </div>
      </div>
      {/* <button 
        className=" my-2"
        onClick={() => {
          off(!on);
        }}
      >
        {on ? "dark" : "light"}
      </button> */}
      {/* {on && dasa} */}
      {/* {on && <Navbar /> && <TextForm/>} */}
      {/* { on && dasa} */}
      {/* {on && dasa()} */}
      <button onClick={rad}>{on}</button>
    </div>
  );
}
