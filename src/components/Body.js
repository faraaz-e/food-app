import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import restList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // useState() Hook / State Variable
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  // Conditional rendering
  // if( restaurantList.length === 0 ){
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline! Please check your internet connection.</h1>
    );
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="feature-container flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              //Filter rest cards update the ui
              console.log(searchText);
              const filteredRes = restaurantList.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => {
              const filteredRestaurantList = restaurantList.filter(
                (rest) => rest.data.avgRating > 4
              );
              setRestaurantList(filteredRestaurantList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="rest-container flex flex-wrap items-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={"/restaurants/" + restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            {restaurant.data.promoted ? (
              <RestaurantCardPromoted restData={restaurant} />
            ) : (
              <RestaurantCard restData={restaurant} />
            )}
            {/* <RestaurantCard restData={restaurant} /> */}
          </Link>
        ))}
        {/* <RestaurantCard restData={restList[1]} /> */}
      </div>
    </div>
  );
};

export default Body;
