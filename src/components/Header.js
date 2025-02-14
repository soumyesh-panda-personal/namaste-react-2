import { LOGO_URL } from "../utils/contants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    //using state variable we re-render the component to show login and logout text based on click.
    const [loggedState, setloggedState] = useState("LogIn");
    const onlineStatus = useOnlineStatus();

    //Accesing the context
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="header d-flex border-bottom shadow-lg bg-gray-50 mb-5">
        <div className="logoContainer">
            <img className="logo" src = {LOGO_URL}></img>
        </div>
        <div className="nav-items content-center">
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
                <button className="loginbtn w-auto px-4 bg-sky-500 hover:bg-sky-700 text-white"
                    onClick={()=>{
                        loggedState === "LogIn" ? setloggedState("LogOut") : setloggedState("LogIn");
                    }}
                >
                    {loggedState}
                </button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>
    )
}

export default Header;