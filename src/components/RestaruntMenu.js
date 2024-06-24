import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
// import { MENU_API } from "../utils/constants";
const RestaruntMenu = () => {
  // const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  const resInfo = useRestrauntMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setresInfo(json?.data);
  // };
  if (resInfo == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )[0].card.card;

  // console.log(
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (category) =>
  //       category.card?.card?.["@type"] ==
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   )
  // );
  // console.log(itemCards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  console.log(categories);
  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {/* categories accordion */}
      {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs"}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaruntMenu;
