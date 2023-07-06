import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restList from "../utils/mockData";

const Body = () => {
  // useState() Hook / State Variable

  const [restaurantList, setRestaurantList] = useState(restList);

  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurantList = restaurantList.filter(
              (rest) => rest.data.avgRating > 4
            );
            setRestaurantList(filteredRestaurantList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} restData={restaurant} />
        ))}
        {/* <RestaurantCard restData={restList[1]} /> */}
      </div>
    </div>
  );
};

export default Body;
