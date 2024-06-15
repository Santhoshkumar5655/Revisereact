import Restaruntcard from "./Restaruntcard";
import { useState, useEffect } from "react";
import reslist from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [filteredRestarunt, setfil] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistofres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfil(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  if (listofres.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRestarunt = listofres.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchtext.toLowerCase())
              );
              setfil(filteredRestarunt);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestarunt.map((restarunt) => (
          <Restaruntcard key={restarunt?.info?.id} resData={restarunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
