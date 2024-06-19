import { LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnreact, setbtnreact] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="foodlogo" src={LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnreact == "login"
                ? setbtnreact("logout")
                : setbtnreact("login");
            }}
          >
            {btnreact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
