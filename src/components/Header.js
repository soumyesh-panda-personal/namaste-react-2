import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    //using state variable we re-render the component to show login and logout text based on click.
    const [loggedState, setloggedState] = useState("LogIn");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header d-flex">
        <div className="logoContainer">
            <img className="logo" src = {LOGO_URL}></img>
        </div>
        <div className="nav-items d-flex">
            <ul className="d-flex">
                <li>
                    Online Status: {onlineStatus ? "✔" : "⛔"}
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to = "/ab">About Us</Link>
                </li>
                <li>
                    <Link to = "/cu">Contact Us</Link>
                </li>
                <li>
                    <Link to = "/Gro">Grocery</Link>
                </li>
                <li>Cart</li>
                <button className="loginbtn"
                    onClick={()=>{
                        loggedState === "LogIn" ? setloggedState("LogOut") : setloggedState("LogIn");
                    }}
                >
                    {loggedState}
                </button>
            </ul>
        </div>
    </div>
    )
}

export default Header;