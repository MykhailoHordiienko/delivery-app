export const getProducts = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  console.log('getProducts');
  const data = await res.json();
  return data;
};
