import React from 'react';
import './Card.css';
import {useDispatch, useSelector} from "react-redux";
import {onCardVisibilityToggle} from "../../actions";
import CardItem from "../card-item/CardItem";

const Card = () => {
  const card = useSelector(({card}) => card);
  const dispatch = useDispatch();
  return (
    <div className='modal-desc'>
      <div className='modal-box'>
        <div className='d-flex justify-content-end'>
          <button className='d-block btn btn-primary' onClick={() => dispatch(onCardVisibilityToggle())}>close</button>
        </div>
        <div className='mt-3'>
          {card.length > 0 && card.map(product => <CardItem key={product.id} product={product} />)}
          {card.length === 0 && <div>card is empty yet</div>}
        </div>

      </div>
    </div>
  );
};

export default Card;
