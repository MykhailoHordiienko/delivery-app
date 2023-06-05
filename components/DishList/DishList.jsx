import dishes from '@/dishes';
import DishItem from '../DishItem/DishItem';

const DishList = ({ shop }) => {
  return (
    <ul className="flex gap-4 flex-wrap justify-center">
      {dishes[shop].map((item, idx) => (
        <DishItem
          key={idx}
          item={item}
        />
      ))}
    </ul>
  );
};

export default DishList;
