import dishes from '@/dishes';
import DishListItem from '../DishItem/DishListItem';

const DishList = ({ shop }) => {
  return (
    <ul className="flex gap-4 flex-wrap justify-center">
      {dishes[shop].map((item, idx) => (
        <DishListItem
          key={idx}
          item={item}
        />
      ))}
    </ul>
  );
};

export default DishList;
