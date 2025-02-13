import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data })=> {

    const [showItems, setShowItems] = useState(false); // Simple state varriable to handle show/hide menu items
    //console.log(data);
    //function to toggle the menu items. So if showitems is true, make it false and vice-versa. This is how we build toggle fucntionality.
    const HandleClick = () => {
        setShowItems(!showItems);
    }
    return (
        <div>
            <div className="w-6/12 mx-auto shadow-lg bg-gray-50 p-3 mb-5">
                <div className="accordian-header d-flex justify-between cursor-pointer" onClick={HandleClick}>
                    {/*accordian header*/}
                    <span className="font-extrabold">{data.title} ({data.categories.length})
                    </span>
                    <span>⬇️</span>    
                </div>
                {/*Only when showItems is true, then show the listitems*/}
                {showItems &&
                    <div className="accordian-body">
                        <ItemList items={data.categories}/>
                    </div>
                }
                
                {/*accordian body*/}
            </div>
        </div>
    );
};

export default RestaurantCategory;