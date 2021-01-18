import React from 'react';
import {useDispatch} from "react-redux";
import {onItemInCard} from "../../actions";
import './ProductItem.css';

const ProductItem = ({productData, isAddedToCard}) => {
  const {title, description, price, image} = productData;
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <div className='product-img-wrapper'>
        <img className="product-img" src={image} alt={title}/>
      </div>
        <div className="product-body">
          <h4 >{title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">price: {price}</h6>
          <button className='btn btn-primary' onClick={()=>dispatch(onItemInCard(productData))}>{isAddedToCard ? 'delete from card' : 'add to card'}</button>
        </div>
    </div>

  );
};

export default ProductItem;

