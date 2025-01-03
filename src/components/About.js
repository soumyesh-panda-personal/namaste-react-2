import User from "./User";
import UserClass from "./UserClass";
import React from "react";
/*const About = () => {
    return (
        <div className="About-wrapper wrapper justify-center">
            <h1>This is About us Page</h1>
            <User name={"Soumyesh functions"}/>
            <UserClass name={"Soumyesh class"} location={"Banaglore"}/>
        </div>
    );
}*/

// We will change this functional component About a class component now -:

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
    }

    componentDidMount() {
        console.log("parent did mount");
    }

    render() {
        console.log("parent render");
        return (
            <div className="About-wrapper wrapper justify-center">
                <h1>This is About us Page</h1>
                <User name={"Soumyesh functions"}/>
                <UserClass name={"Soumyesh class"} location={"Banaglore"}/>
            </div>
        );
    }
}

export default About;
