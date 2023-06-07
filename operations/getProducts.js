import getBasePathForFetch from '@/helpers/getBasePathForFetch';

export const getProducts = async () => {
  try {
    const res = await fetch(`${getBasePathForFetch()}/api/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // const data = await res.json();
    return res;
  } catch (error) {
    throw new Error(`Cant get data from DB ${error}`);
  }
};
