import React from 'react';
import {NavLink} from 'react-router-dom';
import Home from './Home';
import Create from './Create';


function Header() {
  return (
    <>
       <NavLink className={nav=>nav.isActive? 'on-active':''} to='/'>Home</NavLink>
       <NavLink className={nav=>nav.isActive? 'on-active':''} to='/create'>Create</NavLink>
    </>
  )
}

export default Header