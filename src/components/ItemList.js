import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex items-center"
        >
          <div className="w-9/12 pr-2">
            <p className="font-medium py-1">{item.card.info.name}</p>
            <p className="font-light text-sm py-1">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <p className="text-xs font-light text-gray-500 py-1 px-1">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="px-6 py-2 mx-10 my-16 bg-white text-green-600 text-xs font-medium rounded-lg border shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
