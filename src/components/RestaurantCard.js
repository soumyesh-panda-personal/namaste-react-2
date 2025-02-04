import { CDN_URL_RES_IMG } from "../utils/contants";

const RestaurantCard = (props) => {
    const { resData } = props; 
    {/*Destructuring the props object*/}
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
    } = resData?.info;
        return (
            <div className="w-100 mtb-10">
                <img 
                    className="res-img"
                    src={CDN_URL_RES_IMG + cloudinaryImageId}
                />
                <div className="card-items">{name}</div> {/*using the desturctured object directly*/}
                <div className="card-items">{cuisines.join(', ')}</div>
                <div className="card-items">{avgRating}</div>
                <div className="card-items">{resData.info.sla.deliveryTime} minutes</div>
            </div>
        )
}

// Higher order Component
// Input - RestaurantCard ==> returns a component -> RestaurantCardlocality
// we pass the props in to our component, and destructure it to use it accordingly.

export const withLocalityLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>locality is Whitefield</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;