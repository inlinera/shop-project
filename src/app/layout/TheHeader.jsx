import React from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.scss';
//COMPONENTS
import { TheInput } from '../components/UI/Input/TheInput';
import { TheBtnHeader } from './components/Button/TheBtnHeader';
//ICONS
import { LuShoppingCart } from "react-icons/lu";

export const TheHeader = ({ setSearchQuery }) => {
  return (
    <header>
      <Link to="/products"><h2>znline</h2></Link>
      <div className='header-items'>
        <div className='search-element'>
          <TheInput placeholder='Search the product' setSearchQuery={setSearchQuery} />
        </div>
        <div className='user-elements'>
          <Link to="/cart">
            <TheBtnHeader><LuShoppingCart /></TheBtnHeader>
          </Link>
        </div>
      </div>
    </header>
  );
};