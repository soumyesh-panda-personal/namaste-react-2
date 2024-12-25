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
        <div className="d-flex w-100 mtb-10 card">
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

export default RestaurantCard;