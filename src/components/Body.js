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
      <div className="flex justify-center m-5">
        <div className="px-4">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
              />
            </svg>
        </div>
        <h1>
          Looks like you're offline! Please check your internet connection
        </h1>
      </div>
    );
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="feature-container flex flex-wrap space-x-60 items-center border-b-2 mx-3">
        <div className="text-2xl font-bold text-gray-700 px-4">
          {restaurantList.length} restaurants
        </div>
        <div className="search">
          <input
            type="text"
            className="h-8 w-80 p-4 border border-solid shadow-md rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search your favourite restaurant ..."
          />
          <button
            className="p-4 m-1"
            onClick={() => {
              //Filter rest cards update the ui
              console.log(searchText);
              const filteredRes = restaurantList.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="filter m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 font-light text-sm"
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
