//This is a custom hook which we created. Same creating state varaible and API call we made it here and abstracted the feature
// in to a separate custom hook.
import { useState, useEffect } from "react";
import { MENU_API } from "./contants";

const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setrestaurantInfo ] = useState(null);
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setrestaurantInfo(json.data);
    }

    return restaurantInfo;
}

export default useRestaurantMenu;