const getBasePathForFetch = () => {
  let base_url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : `https://delivery-app-silk-one.vercel.app`;
  return base_url;
};
export default getBasePathForFetch;
