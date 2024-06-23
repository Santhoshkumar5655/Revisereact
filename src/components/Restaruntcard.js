import { CDN_URL } from "../utils/constants";

const Restaruntcard = (props) => {
  // console.log(kfc);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString } = resData?.info;
  console.log(CDN_URL + cloudinaryImageId);
  // const { resname, cuisine } = props;
  return (
    <div className="m-4 p-4 w-[270px] h-[500px]  bg-[#f0f0f0f0] rounded-lg">
      <img
        className="rounded-lg"
        alt="meghanafood"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-5 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (Restaruntcard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <Restaruntcard {...props} />
      </div>
    );
  };
};
export default Restaruntcard;
