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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <h1>tomato</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>{ onlineStatus ? "🟢 Online" : "🔴 Offline" }</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <img className="cart" src={cart} alt="cart" />
          <button
            className="login-btn"
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
