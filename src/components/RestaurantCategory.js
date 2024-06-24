import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  console.log(data);

  return (
    <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 ">
      <div className="flex justify-between">
        <span className="font-bold text-lg">{data.title}</span>
        <span>⬇️</span>
      </div>

      <ItemList items={data?.categories} />
    </div>
  );
};

export default RestaurantCategory;
