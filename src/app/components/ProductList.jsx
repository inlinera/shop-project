import React, { useEffect, useState, useMemo } from 'react';
// COMPONENTS
import { NavSort } from './NavSort/NavSort';
import ProductItem from './ProductItem/ProductItem';
import MyLoader from './UI/MyLoader/MyLoader';
import { FilterModal } from './AllModals/FilterModal';
import { SortModal } from './AllModals/SortModal';
// PRODUCTLIST
import { product } from '../utils/list';
import { sortByType, sortByBrands, sortByPrice } from '../data/data.sort';

export const ProductList = ({ searchQuery }) => {
  //SORT BY TYPE
  const [chosedType, setChosedType] = useState('All Products');
  const [filteredProducts, setFilteredProducts] = useState(product);
 //SORT BY BRANDS
  const [activeBrands, setActiveBrands] = useState(sortByBrands.map(brand => brand.name));
  const [tempBrands, setTempBrands] = useState(activeBrands);
  //SORT BY PRICE
  const [sortOrder, setSortOrder] = useState(sortByPrice[0].name);

  // MODAL
  const [filterModalActive, setFilterModalActive] = useState(false);
  const [sortModalActive, setSortModalActive] = useState(false);

  const handleBrandChange = brandName => {
    setTempBrands(prevState => {
      const newTempBrands = prevState.includes(brandName)
        ? prevState.filter(name => name !== brandName)
        : [...prevState, brandName];
      return newTempBrands;
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setActiveBrands(tempBrands);
    setFilterModalActive(false);
  };

  const filterProducts = useMemo(() => {
    let filtered = product;
    //SORT BY TYPE
    if (chosedType !== 'All Products') {
      filtered = filtered.filter(p => p.type === chosedType);
    }
    //SORT BY BRANDS
    if (activeBrands.length >= 0) {
      filtered = filtered.filter(p => activeBrands.includes(p.brand));
    }
    //SORT BY PRICE 
    if (sortOrder === sortByPrice[0].name) {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === sortByPrice[1].name) {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
    // FILTER BY SEARCH QUERY
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [chosedType, activeBrands, sortOrder, searchQuery]);

  useEffect(() => {
    setFilteredProducts(filterProducts);
  }, [filterProducts]);

  // LOADING IMITATION
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1300);
    }
  }, []);


  
  return (
    <div className='product_main'>
      <NavSort
        objects={sortByType} chosedType={chosedType} setChosedType={setChosedType}
        setFilterModalActive={setFilterModalActive} setSortModalActive={setSortModalActive}/>

      <SortModal sortObject={sortByPrice} sortOrder={sortOrder} setSortOrder={setSortOrder}
      sortModalActive={sortModalActive} setSortModalActive={setSortModalActive}/>

      <FilterModal sortObjects={sortByBrands} tempBrands={tempBrands}
      handleBrandChange={handleBrandChange} filterModalActive={filterModalActive}
      setFilterModalActive={setFilterModalActive} handleSubmit={handleSubmit}/>

      <div className='product_list'>
      <h3>{chosedType}</h3>
      <div className='product_list_main'>
        {filteredProducts.length !== 0
          ? filteredProducts.map(e => (
              isLoading
                ? <MyLoader key={e.name} />
                : <ProductItem image={e.pictures} name={e.name}
                    price={e.price} type={e.type} id={e.id} key={e.name}/>
            ))
          : <p className='sort_state'>Not Found</p>
        }
        </div>
      </div>
    </div>
  );
};