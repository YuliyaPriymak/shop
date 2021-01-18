import React from 'react';
import './CardItem.css'

const CardItem = ({product}) => {
  return (
    <div className='d-flex align-items-center mt-2'>
      <div className='card-image'><img src={product.image} alt={product.title}/></div>
      <div className='card-box ml-2'>
        {product.title}
      </div>
    </div>
  );
};

export default CardItem;
