import DishListItem from '../DishItem/DishListItem';

const DishList = ({ dishes }) => {
  return (
    <ul className="flex gap-4 flex-wrap justify-center">
      {dishes.map(item => (
        <DishListItem
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
};

export default DishList;
