import { useState } from "react";
import logo from "../../food-app-logo.png";
import cart from "../../takeaway.png";

const Header = () => {
  // let btnName = "Login";
  const [loginBtnName, setLoginBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <h1>tomato</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
