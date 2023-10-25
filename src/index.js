import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// function PrintName() {
//     return<h1>Hello React</h1>
// }


// const PrintName = () => {
//     return <h1>Hello React Js </h1>
// }

// ReactDOM.render(<PrintName />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


