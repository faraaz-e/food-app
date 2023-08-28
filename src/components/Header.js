import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../food-app-logo.png";
import cart from "../../takeaway.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  // let btnName = "Login";
  const [loginBtnName, setLoginBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg mb-2 mx-3 sticky top-0 bg-white z-10">
      <div className="logo-container flex items-center">
        <img className="w-10 h-10 m-2" src={logo} alt="logo" />
        <h1 className="font-bold text-3xl text-black">Food App</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn px-4 pb-2"
            onClick={() => {
              loginBtnName == "Login"
                ? setLoginBtnName("Logout")
                : setLoginBtnName("Login");
            }}
          >
            {loginBtnName}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
