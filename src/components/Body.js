import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    {/*now we use usestate hook. first arg is the initial value which needs to be shown and second is a function which will hold the data when modified. and resList here int he default value passed here which will go to the first argument.*/}
    const[listOfRestaurant, setlistOfRestaurant]=useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button
                    onClick={()=>{
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        //this will now re-rended the comopnent since the state variable got modified with this filter.
                        setlistOfRestaurant(filteredList);
                    }}
                >
                    Top Rated restaurants
                </button>
            </div>
            <div className="res-container res-card-wrapper d-flex">
                {
                    listOfRestaurant.map((restaurant) => (
                        <RestaurantCard key = {restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;