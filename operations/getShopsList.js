export const getShopsList = async () => {
  const req = await fetch('http://localhost:3000/api/shops');
  const shops = await req.json();
  return shops;
};
