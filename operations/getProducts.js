import getBasePathForFetch from '@/helpers/getBasePathForFetch';

const getProducts = async () => {
  try {
    const res = await fetch(`${getBasePathForFetch()}/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Cant get data from DB ${error}`);
  }
};
export default getProducts;
