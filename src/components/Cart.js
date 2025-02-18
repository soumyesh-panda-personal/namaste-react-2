import { useDispatch, useSelector } from "react-redux";
import { CDN_URL_RES_IMG } from "../utils/contants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const removeFromCartHandler = () => {
        dispatch(clearCart());
    }

    return (
        <div className="cart-page w-100 m-auto pt-35">
            <h1 className="text-xl font-bold text-center">This is your cart</h1>
    
            <div className="cart-line-item-wrapper w-6/12 m-auto my-5 text-center">
                <button className="clear-cart bg-gray-200 border-white transition delay-150 
                                   duration-300 text-green-600 hover:bg-gray-300 w-24 py-1 font-medium rounded-lg m-auto mb-10"
                        onClick={removeFromCartHandler}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 ? <div>Please add items to your cart fast</div>:
                    <div>{cartItems.map((card) => (
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
                                >
                                    remove
                                </button>
                            </div>
                        </div>
                    ))}</div>
                }
            </div>
        </div>
    )
}

export default Cart;