import normalizeOrder from '@/helpers/normalizeOrder';

export const addToOrderStore = (state, item) => {
  return normalizeOrder([...state, item]);
};

export const removeFromOrderStore = (state, id) => {
  return state.filter(item => item.id !== id);
};

export const decrementOrderStore = (state, id) => {
  const itemChangedQuantity = state.map(item => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
  return itemChangedQuantity;
};

export const incrementOrderStore = (state, id) => {
  const itemChangedQuantity = state.map(item => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  return itemChangedQuantity;
};
