import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductItem from "../product-item/ProductItem";
import {fetchProducts} from "../../actions";

import './ProductList.css';

const ProductList = () => {
  const products = useSelector((state) => state.products)
  const card = useSelector(({card}) => card)

  const dispatch = useDispatch();


  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  return (
    <div className='product-list'>
      {products.map(product => <ProductItem
        key={product.id}
        isAddedToCard={!!card.find(el => el.id === product.id)}
        productData={product}/>)}
    </div>
  );
};

export default ProductList;
