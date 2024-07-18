import { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//COMPONENTS
import { TheHeader } from './app/layout/TheHeader';
import { Shop } from './app/pages/Shop';
import { Cart } from './app/pages/Cart';
import { Error } from './app/pages/Error';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Router basename='/shop-project'>
      <TheHeader setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/products" element={<Shop searchQuery={searchQuery} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
};