import React from "react";
import ReactDom from "react-dom/client";

//jsx or react element
const heading = <h1>Welcome to JSX in React</h1>

// fucntional component

const Heading2 = () => {return <h2>Welcome to JSX in React</h2>}

// component composition - calling another component with in a component

const HeadingComponent = () => {
    return (
        <div class="wrapper">
            <Heading2/>
            <h1>This is functional component</h1>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);