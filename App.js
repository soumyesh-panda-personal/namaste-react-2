import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
    return (
        <div className="header d-flex">
        <div className="logoContainer">
            <img className="logo" src = "https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"></img>
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

const RestaurantCard = (props) => { {/*passing props to a component*/}
    return (
        <div className="d-flex w-100 mtb-10 card">
            <img 
                className="res-img"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG"
            />
            <div className="card-items">{props.resName}</div> {/*using props, dynamic data gets passed like this*/}
            <div className="card-items">{props.cusines}</div>
            <div className="card-items">4.4 stars</div>
            <div className="card-items">38 minutes</div>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search-wrapper">
                <input type="text" className="search-box mr-10"></input>
            </div>
            <div className="res-container res-card-wrapper d-flex">
                {/*passing props through a component*/}
                <RestaurantCard resName="Meghna Foods" cusines= "Biriyani, North Indian"/>
                <RestaurantCard resName="KFC" cusines= "Burgers, Fast food"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);