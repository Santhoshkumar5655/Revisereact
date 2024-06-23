import { LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnreact, setbtnreact] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between  bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO} />
      </div>
      <div className="flex items-center ">
        <ul className="flex  p-4 m-4">
          <li className="px-4">onlinestatus : {onlineStatus ? "💚" : "❤️"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
