import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../food-app-logo.png";
import cart from "../../takeaway.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "Login";
  const [loginBtnName, setLoginBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg mb-2 mx-3 sticky top-0 bg-white z-10">
      <div className="logo-container flex items-center">
        <img className="w-10 h-10 m-2" src={logo} alt="logo" />
        <h1 className="italic font-bold text-4xl text-red-500">tomato</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{ onlineStatus ? "🟢 Online" : "🔴 Offline" }</li>
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
          <img className="cart w-8" src={cart} alt="cart" />
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
