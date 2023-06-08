import getBasePathForFetch from '@/helpers/getBasePathForFetch';

export const postOrderToDb = async orderData => {
  try {
    await fetch(`${getBasePathForFetch()}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderData }),
    });
  } catch (error) {
    throw new Error(`Cant post to DB ${getBasePathForFetch()}`);
  }
};
