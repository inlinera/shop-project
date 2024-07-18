import React from 'react'
import cl from './NavSort.module.scss'
//ICONS
import { PiSlidersHorizontalDuotone } from "react-icons/pi"
import { RiSortDesc } from "react-icons/ri";

export const NavSort = ({objects, setChosedType, chosedType, setFilterModalActive, setSortModalActive}) => {

  return (
    <div className={cl.navigate_sort}>
      <button className={cl.btnSort} onClick={() => setSortModalActive(true)}>
      <RiSortDesc style={{
       fontSize: '19px',
        }}/>
      </button>
      <button className={cl.btnSort}
      onClick={() => setFilterModalActive(true)}
      >
        <div style={{display: 'flex'}}>
        <PiSlidersHorizontalDuotone style={{
        marginRight: '4px', fontSize: '19px',
        }}/>
        Filters
        </div>
        </button>
        {objects.map(e => {
          const classes = [cl.btnSort]
          if(e.name === chosedType) {
            classes.push(cl.active)
          }
            return  <button key={e.name}
            onClick={() => setChosedType(e.name)}
            className={classes.join(' ')}>
                {e.name}
            </button>
        })}
    </div>
  )
}
