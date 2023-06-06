import CartListItem from '../CartListItem/CartListItem';

const CartList = ({ order }) => {
  return (
    <ul className="flex gap-4 flex-wrap justify-center">
      {order.map((item, idx) => (
        <CartListItem
          key={idx}
          item={item}
        />
      ))}
    </ul>
  );
};

export default CartList;
