import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restId) => {
    
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const fetchRestData = await fetch(MENU_API + restId);
        const restData = await fetchRestData.json();
    
        setRestInfo(restData.data);
      };

    return restInfo;
};

export default useRestaurantMenu;