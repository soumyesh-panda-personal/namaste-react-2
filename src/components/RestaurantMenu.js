import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contants";

const RestaurantMenu = () => {
    const [restaurantInfo, setrestaurantInfo ] = useState(null);
    const { resId } = useParams();
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setrestaurantInfo(json.data);
    }

    if (restaurantInfo === null) {
        return <Shimmer/>;
    }

    const {name, costForTwoMessage, cloudinaryImageId, cuisines,} = restaurantInfo?.cards[2]?.card.card.info;
    const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    return (
        <div className="menu w-100">
            <h1 className="d-flex">{name}</h1>
            <h2 className="d-flex">{cuisines.join(', ')}</h2>
            <h2 className="d-flex">{costForTwoMessage}</h2>
            <h3>Menu -:</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name + " -- Rs" + (item.card.info.price)/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;
