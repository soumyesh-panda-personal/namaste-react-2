import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantInfo = useRestaurantMenu(resId);

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
