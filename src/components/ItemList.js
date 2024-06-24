const ItemList = ({ items }) => {
  //   console.log(items);
  //   const list = items.map((s) => s.itemCards);
  //   console.log(list);
  console.log(items);
  const list = items.map((res) => res?.itemCards);
  console.log(list);

  return (
    <div>
      {list.map((h) => (
        <span>{h?.card?.info?.name}</span>
      ))}
    </div>
  );
  <div>
    {items.map((k) => (
      <div key={k?.card?.info?.id}>
        <div>
          <span>{k?.card?.info?.name}</span>
          <span>{k?.card?.info?.name}</span>
        </div>
      </div>
    ))}
  </div>;
};

export default ItemList;
