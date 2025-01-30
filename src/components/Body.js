import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const[listOfRestaurant, setlistOfRestaurant]=useState([]);
    const [searchText, setsearchText] = useState("");
    const [filteredSearch, setfilteredSearch] = useState([]);
    
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.989770900513944&lng=77.694921495487&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredSearch(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const userOnline = useOnlineStatus();
    if(userOnline === false) {
        return (
            <h1>Please check your internet connection. Seems you have a glitch !!!</h1>
        );
    }
    return listOfRestaurant.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <button
                    onClick={()=>{
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setlistOfRestaurant(filteredList);
                    }}
                >
                    Top Rated restaurants
                </button>
            </div>
            <div className="search-wrapper">
                <input type="text" className="search-box mr-10" value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                />
                
                <button
                    onClick={()=>{
                        const filteredSearchList = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilteredSearch(filteredSearchList); 
                    }}
                >Search</button>
            </div>
            <div className="res-container res-card-wrapper d-flex">
                {
                    filteredSearch.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant.info.id} key = {restaurant.info.id} className="card d-flex"><RestaurantCard resData={restaurant}/></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;