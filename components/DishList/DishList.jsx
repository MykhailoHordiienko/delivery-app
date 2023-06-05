import dishes from '@/dishes';
import DishItem from '../DishItem/DishItem';

const DishList = ({ shop }) => {
  return (
    <ul>
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
