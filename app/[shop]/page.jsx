import DishList from '@/components/DishList/DishList';
import React from 'react';

const ShopPage = ({ params: { shop } }) => {
  return <DishList shop={shop} />;
};

export default ShopPage;
