import React from "react";
import ReactDom from "react-dom/client";

//jsx or react element
const heading = <h1>Welcome to JSX in React</h1>

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(heading);