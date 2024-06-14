import { CDN_URL } from "../utils/constants";

const Restaruntcard = (props) => {
  // console.log(kfc);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString } = resData?.info;
  // const { resname, cuisine } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="meghanafood"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default Restaruntcard;
