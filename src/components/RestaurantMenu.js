import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantInfo = useRestaurantMenu(resId);

    if (restaurantInfo === null) {
        return <Shimmer/>;
    }

    const {name, costForTwoMessage, cloudinaryImageId, cuisines,} = restaurantInfo?.cards[2]?.card.card.info;
    const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    //Now we will fetch diff categories from menu and filter it
    //for @type in the array, we can not traverse it since its not valid variable,hence wrap it with ["@type"]
    const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) => category.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
    //console.log(categories);
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(', ')}</h2>
            <h2 className="mb-5">{costForTwoMessage}</h2>
            {/* commented it to build the filter with categories
                <h3>Menu -:</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name + " -- Rs" + (item.card.info.price)/100}</li>)}
            </ul>
            */}
            {/*Now we will map over the filtered catogories*/}
            {categories.map((category)=> 
                <RestaurantCategory key={category?.card?.card.categoryId} data = {category?.card?.card}/>
            )}
        </div>
    )
}

export default RestaurantMenu;
