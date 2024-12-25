import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search-wrapper">
                <input type="text" className="search-box mr-10"></input>
            </div>
            <div className="res-container res-card-wrapper d-flex">
                {/*using map() to iterate over each restaurant object with in the array*/}
                {
                    resList.map((restaurant) => (
                        <RestaurantCard key = {restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;