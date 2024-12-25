import { LOGO_URL } from "../utils/contants";

const Header = () => {
    return (
        <div className="header d-flex">
        <div className="logoContainer">
            <img className="logo" src = {LOGO_URL}></img>
        </div>
        <div className="nav-items d-flex">
            <ul className="d-flex">
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

export default Header;