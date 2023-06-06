const normalizeOrder = data => {
  const uniqueData = Array.from(
    data
      .reduce((map, item) => {
        if (map.has(item.id)) {
          const existingItem = map.get(item.id);
          existingItem.quantity += item.quantity;
        } else {
          map.set(item.id, { ...item });
        }
        return map;
      }, new Map())
      .values()
  );
  return uniqueData;
};

export default normalizeOrder;
