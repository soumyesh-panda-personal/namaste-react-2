import RestaurantCard from "./RestaurantCard";
//will remove this import of mockdata as not using any more. Live API is getting used.
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    {/*now we use usestate hook. first arg is the initial value which needs to be shown and second is a function which will hold the 
        data when modified. and resList here int he default value passed here which will go to the first argument.
        Also we removed the default mock data and passing empty array on load and fetching data from live API call.
        Using Shimmer UI to show user fake cards before real data comes in.*/}
    const[listOfRestaurant, setlistOfRestaurant]=useState([]);
    
    //useEffect would be used to re-render the component based on API's resposne from the callback function fetchData.
    useEffect(() => {
        fetchData()
    }, []);

    {/*To fetch data from API, we use fetch(), this is function we have from the browser JS engine. We need to use promices for this.
        Using async before the functiona and to wait for response from fetch API, using await in front of it.
        */}

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.989770900513944&lng=77.694921495487&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //passing the live data to setListOfRestaurant. Once the component is rendered,then live data comes in and component re-renders with this data.
        setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    return listOfRestaurant.length === 0 ? <Shimmer/> :(
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