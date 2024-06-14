import Restaruntcard from "./Restaruntcard";
import { useState } from "react";
import reslist from "../utils/mockData";

const Body = () => {
  const [listofres, setlistofres] = useState(reslist);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            setlistofres;
            console.log("button clicked");
            filteredlist = listofres.filter(
              (res) => res?.info?.avgRatingString > 4
            );
            setlistofres(filteredlist);
            console.log(listofres);
          }}
        >
          Top Rated Restarunt
        </button>
      </div>
      <div className="res-container">
        {listofres.map((restarunt) => (
          <Restaruntcard key={restarunt?.info?.id} resData={restarunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
