import React from "react";
{/*In class based component-import React. use the keyword "class", give a name to component, this extends from react component so react know its a component.
    It has a render(), with in this we have the same return which returns a piece of JSX. At the end we export it.
    */}
{
    /**
     * to catch the props passed, we need to use constructor here and pass it as argument.
     * the we use super keyword and pass props in it. After that using the "this" keyword, we can use the props in jsx.
     * -> using state variable in class based component.
     */
}
class UserClass extends React.Component {
    constructor(props){
        super(props);

        //creation of state through constructor
        this.state = {
            count: 0
        }
        console.log("child constructor");
    }

    componentDidMount() {
        console.log("child did mount");
    }

    render(){
        //Also we can destruture the props -:
        const {name, location} = this.props;
        const {count} = this.state; // Destructuring the state variable.
        console.log("child render");
        return (
            <div className="card user-card">
                <h1> This is s the state variable data - {count}</h1>
                <button onClick={()=>{
                    // Never update state variable directly
                    //setState will take multiple object, where we can update the state variables.
                    this.setState({
                        count : this.state.count + 1
                    });
                }}>
                    click to increase count
                </button>
                <h2>Name: {this.props.name}</h2> {/*used normal way*/} 
                <h3>Location: {location}</h3> {/*used the destructred object*/}
                <h4>Contact: twitter</h4>
            </div>
        );
    }
}

export default UserClass