import { useState } from "react";
const User = (props) => {
    const [initialVal, setinitialVal] = useState(0);
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