import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = restData?.data; // destructuring and Optional chaining
  

  return (
    <div className="m-4 p-4 w-[290px] h-80 items-center hover:border hover:border-solid hover:border-gray-300 hover:shadow-lg">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      {/* <h3> {restData.data.name} </h3> */}
      <h3 className="font-bold py-2 text-lg"> {name} </h3>
      <h5 className="font-extralight text-sm"> {cuisines.join(", ")} </h5>
      <h5 className="py-4 flex space-x-2 items-center">
        <div className="bg-green-600">
          <span className="font-bold text-xs px-2 text-white">
            &#9734; {avgRating}
          </span>
        </div>
        <span className="text-gray-400">•</span>
        <span className="font-light px-1 text-xs">
          ₹ {costForTwo / 100} FOR TWO
        </span>
        <span className="text-gray-400">•</span>
        <span className="font-light px-1 text-xs">{deliveryTime} MINS</span>
      </h5>
    </div>
  );
};

//Higher Order Component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-700 text-white m-5 p-1 rounded-lg text-xs">PROMOTED</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
