import Restaruntcard, { withPromotedLabel } from "./Restaruntcard";
import { useState, useEffect } from "react";
import reslist from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [filteredRestarunt, setfil] = useState([]);

  const Promotedlabel = withPromotedLabel(Restaruntcard);
  console.log(listofres);
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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1>Looks like offline </h1>;
  }

  if (listofres.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4x ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="m-4 p-4x flex items-center">
          <button
            className="px-4 py-2 bg-green-100 m-4 flex items-center rounded-lg"
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
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestarunt.map((restarunt) => (
          <Link
            key={restarunt?.info?.id}
            to={"/restaurants/" + restarunt?.info?.id}
          >
            {/* {restaurant.data.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )} */}
            {/* {<Restaruntcard resData={restarunt} />} */}
            {restarunt.info?.avgRatingString > 4 ? (
              <Promotedlabel resData={restarunt} />
            ) : (
              <Restaruntcard resData={restarunt} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
