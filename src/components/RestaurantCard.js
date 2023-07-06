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
    <div className="rest-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      {/* <h3> {restData.data.name} </h3> */}
      <h3> {name} </h3>
      <h4> {cuisines.join(", ")} </h4>
      <h4> ⭐ {avgRating} </h4>
      <h5> ₹ {costForTwo / 100} FOR TWO </h5>
      <h5> {deliveryTime} Mins </h5>
    </div>
  );
};

export default RestaurantCard;
