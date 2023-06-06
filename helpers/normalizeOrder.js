const normalizeOrder = data => {
  const uniqueData = Object.values(
    data.reduce((acc, item) => {
      const key = JSON.stringify(item);
      if (acc[key]) {
        acc[key].quantity += item.quantity;
      } else {
        acc[key] = { ...item };
      }
      return acc;
    }, {})
  );
  return uniqueData;
};

export default normalizeOrder;
