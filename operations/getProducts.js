import getBasePathForFetch from '@/helpers/getBasePathForFetch';

export const getProducts = async () => {
  try {
    const res = await fetch(`${getBasePathForFetch()}/api/products`);
    console.log('CONSOLE RES--->>>', res);
    const data = await res.json();
    console.log('CONSOLE DATA--->>>', data);
    return data;
  } catch (error) {
    throw new Error(`Cant get data from DB ${error}`);
  }
};
