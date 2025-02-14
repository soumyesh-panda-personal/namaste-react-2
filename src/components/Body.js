import RestaurantCard, {withLocalityLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const[listOfRestaurant, setlistOfRestaurant]=useState([]);
    const [searchText, setsearchText] = useState("");
    const [filteredSearch, setfilteredSearch] = useState([]);

    const RestaurantCardLocality = withLocalityLabel(RestaurantCard);
    
    console.log(listOfRestaurant);
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.989770900513944&lng=77.694921495487&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json);
        setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredSearch(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const userOnline = useOnlineStatus();
    //to detch the SetuserName from userContext

    const { loggedInUser, SetUserName } = useContext(UserContext);
    if(userOnline === false) {
        return (
            <h1>Please check your internet connection. Seems you have a glitch !!!</h1>
        );
    }
    return listOfRestaurant.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="d-flex items-center justify-between w-8/12 mx-auto mb-5">
                <div className="filter w-sm">
                    <button className="px-4 bg-sky-500 hover:bg-sky-700 text-white"
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
                <div className="search-wrapper d-flex mr-10">
                    <input type="text" className="search-box mr-10 border border-gray" value={searchText}
                        onChange={(e)=>{
                            setsearchText(e.target.value);
                        }}
                    />
                    
                    <button className="w-auto px-4 bg-sky-500 hover:bg-sky-700 text-white"
                        onClick={()=>{
                            const filteredSearchList = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            setfilteredSearch(filteredSearchList); 
                        }}
                    >Search</button>
                </div>
                
                {/*Adding a input box to update the context data on the fly*/}

                <div className="context-update d-flex">
                    <label className="mr-5">UserName: </label>
                    <input type="text" className="search-box mr-10 border border-gray" value={loggedInUser}
                        onChange={(e)=> SetUserName(e.target.value)}
                    />
                </div>
            </div>
    
            {/*based on condition, we render the HOC in this block*/}
            <div className="res-container res-card-wrapper d-flex">
                {
                    filteredSearch.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant.info.id} 
                              key = {restaurant.info.id} 
                              className="card d-flex">
                                {restaurant.info.locality === 'Garudacharpalya' ? (
                                    <RestaurantCardLocality resData={restaurant}/>
                                    ): (<RestaurantCard resData={restaurant}/>)
                                }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;