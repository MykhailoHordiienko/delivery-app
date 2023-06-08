import getBasePathForFetch from '@/helpers/getBasePathForFetch';

const baseUrl = getBasePathForFetch();

export const postOrderToDb = async orderData => {
  try {
    await fetch(`${baseUrl}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderData }),
    });
  } catch (error) {
    throw new Error(`Cant post to DB ${getBasePathForFetch()} end off error`);
  }
};
