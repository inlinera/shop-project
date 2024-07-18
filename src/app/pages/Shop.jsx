import React from 'react';
import { ProductList } from '../components/ProductList';

export const Shop = ({ searchQuery }) => {
  return (
    <div>
      <ProductList searchQuery={searchQuery} />
    </div>
  );
};
