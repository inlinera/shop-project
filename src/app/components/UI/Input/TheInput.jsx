import React, {useState} from 'react';
import cl from './TheInput.module.css';
import { IoSearch } from "react-icons/io5";
//SEARCH
export const TheInput = ({ placeholder, setSearchQuery }) => {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div className={cl.theInput_div}>
      <input
        type='text'
        placeholder={placeholder}
        onChange={e => setSearchQuery(e.target.value)}
        className={`${cl.theInput} ${isInputVisible ? cl.show : ''}`}
      />
      <button className={`${cl.theBtn} ${isInputVisible ? cl.active : ''}`} onClick={toggleInput}><IoSearch /></button>
    </div>
  );
};
