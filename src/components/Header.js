import { LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  let [btnreact, setbtnreact] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="foodlogo" src={LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
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
