import React from 'react'
import { Modal } from '../UI/ModalWindow/Modal';
import { Checkbox } from '../UI/Checkbox/Checkbox';
import { TheButton } from '../UI/Button/TheButton';

export const FilterModal = props => {
  return (
    <Modal active={props.filterModalActive} setActive={props.setFilterModalActive}>
        <h3>Choose brands</h3>
        <form onSubmit={props.handleSubmit} style={{margin: '5px'}}>
          {props.sortObjects.map(brand => {
            return (
              <div key={brand.name} style={{margin: '10px'}}>
                <Checkbox
                  checked={props.tempBrands.includes(brand.name)}
                  onChange={() => props.handleBrandChange(brand.name)}
                >
                  <p>{brand.name}</p>
                </Checkbox>
              </div>
            );
          })}
          <TheButton>Apply</TheButton>
        </form>
      </Modal>
  )
}
