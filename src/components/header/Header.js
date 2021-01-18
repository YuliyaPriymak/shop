import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onCardVisibilityToggle} from "../../actions";

const Header = () => {
  const card = useSelector((state) => state.card)
  const dispatch = useDispatch();
  return (
    <header className='bg-warning text-white pt-2 pb-2 d-flex justify-content-end pr-2'>
      <button className='btn btn-primary' onClick={()=>dispatch(onCardVisibilityToggle())}>card: {card.length}</button>
    </header>
  );
};

export default Header;
