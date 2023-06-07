import getBasePathForFetch from '@/helpers/getBasePathForFetch';

const getProducts = async () => {
  try {
    const res = await fetch(`${getBasePathForFetch()}/api/products`);
    const data = await res.text();
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Cant get data from DB ${error}`);
  }
};
export default getProducts;
