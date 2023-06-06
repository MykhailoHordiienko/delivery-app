import DishListItem from '../DishItem/DishListItem';

const DishList = ({ dishes }) => {
  return (
    <ul className="flex gap-4 flex-wrap justify-center">
      {dishes.map((item, idx) => (
        <DishListItem
          key={idx}
          item={item}
        />
      ))}
    </ul>
  );
};

export default DishList;
