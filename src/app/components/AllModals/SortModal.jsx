import React from 'react'
import { Modal } from '../UI/ModalWindow/Modal';
import { Radio } from '../UI/Radio/Radio';

export const SortModal = props => {
  return (
    <Modal active={props.sortModalActive} setActive={props.setSortModalActive}>
        <h3>Sort by Price</h3>
        <form>
          {props.sortObject.map(e => {
            return (
              <div key={e.name} style={{margin: '10px'}}>
                <Radio
                  checked={props.sortOrder === e.name}
                  onChange={() => props.setSortOrder(e.name)}
                >
                  <p>{e.name}</p>
                </Radio>
              </div>
            );
          })}
        </form>
      </Modal>
  )
}
