import {INC, ON_CARD_VISIBILITY_TOGGLE, ON_ITEM_IN_CARD, ON_PRODUCTS_LOADED} from "../action-types";

export const incCounter = () => ({type: INC})
export const onProductsLoaded = (payload) => ({type: ON_PRODUCTS_LOADED, payload})
export const onItemInCard= (payload) => ({type: ON_ITEM_IN_CARD, payload})
export const onCardVisibilityToggle= () => ({type: ON_CARD_VISIBILITY_TOGGLE})

export const fetchProducts = async (dispatch) => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  dispatch(onProductsLoaded(data))
}
