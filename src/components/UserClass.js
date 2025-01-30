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

        //Will create a local state variable and update it below based on API call.
        this.state = {
            userInfo : {
                name : "dummy name",
                location: "default location"
            }
        }
        console.log("child constructor");
    }

    // making an API call
    async componentDidMount() {
        var data = await fetch("https://api.github.com/users/soumyesh-panda-personal");
        var json = await data.json();
        console.log(json);
        console.log("didmount class parent called");

        //updating state variable
        this.setState({
            userInfo: json
        });
    }

    componentWillUnmount() {
        console.log("will unmount called")
    }

    render(){
        //Also we can destruture the state variable data -:
        const {login, location} = this.state.userInfo;
        console.log("child render");
        return (
            <div className="card user-card">
                <h2>Name: {login}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: twitter</h4>
            </div>
        );
    }
}

export default UserClass