import { addItem } from "../utils/cartSlice";
import { CDN_URL_RES_IMG } from "../utils/contants";
import { useDispatch } from "react-redux";

const ItemList = ({ items })=> {
    
    const dispatch = useDispatch();

    //ATC handler
    const addToCartHandler = (card) => {
        // Dispatch an action
        dispatch(addItem(card));
    }
    return (
        <div>
            {/*item List*/}
            {items.map((item, index) => (
                <div key={index}>
                    <div className="accordianHead">
                        <span className="font-bold">{item.title} ({item.itemCards.length})</span>
                        <span>{item.itemCards.map((card) => (
                            <div key={card?.card?.info.id} className="Menu-item d-flex justify-between content-center mb-5 shadow-lg bg-gray-50 p-5">
                                <div className="text-left text-sm mb-5 basis-2/3 d-flex flex-col">
                                    <span className="font-medium text-sm">{card?.card?.info?.name}</span>
                                    <span>{(card?.card?.info?.price)/100}</span>
                                    <span className="text-xs font-light">{card?.card?.info?.description}</span>
                                </div>
                                <div className="img-ATC-holder relative">
                                    <img 
                                        className="w-35 h-30 rounded-lg" src={CDN_URL_RES_IMG + card?.card?.info?.imageId}
                                    />
                                    <button className="ATC bg-gray-200 absolute bottom-2 left-6 border-white transition delay-150 
                                            duration-300 text-green-600 hover:bg-gray-300 w-24 py-1 font-medium rounded-lg"
                                            onClick={() => addToCartHandler(card)}
                                    >
                                        ADD
                                    </button>
                                </div>
                            </div>
                        ))}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;