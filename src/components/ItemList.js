const ItemList = ({ items }) => {
  //   console.log(items);
  //   const list = items.map((s) => s.itemCards);
  //   console.log(list);

  const itemCards = items.map((res) => res?.itemCards);
  console.log(itemCards);

  return (
    <div>
      {itemCards.map((item) => (
        <div key={item?.card?.info?.id}>
          <div>
            <span>{item?.card?.info?.name}</span>
            <span>{item?.card?.info?.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
