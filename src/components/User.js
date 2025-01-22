import { useState, useEffect } from "react";
const User = (props) => {
    const [initialVal, setinitialVal] = useState(0);
    
    //This is to show, how we can use return with in useEffect of functional component. Be aware, the code inside retun of useEffect
    //gets called, only when we leave the page.
    useEffect(()=>{
        console.log("call from useEffect");

        return () => {
            console.log("call from return of useEffect. Some thing like willUnmount");
        }
    },[])

    console.log("render will be called first")
    return (
        <div className="card user-card">
            <h1>{initialVal}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location: Bangalore</h3>
            <h4>Contact: twitter</h4>
        </div>
    );
}

export default User;