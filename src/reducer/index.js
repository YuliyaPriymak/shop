import {INC, ON_CARD_VISIBILITY_TOGGLE, ON_ITEM_IN_CARD, ON_PRODUCTS_LOADED} from "../action-types";

const initialState = {
  products: [],
  card: [],
  counter: 0,
  isCardOpen: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: {
      return {...state, counter: state.counter + 1}
    }
    case ON_PRODUCTS_LOADED: {
      return {...state, products: action.payload}
    }
    case ON_ITEM_IN_CARD: {
      const updatedCard = state.card.filter(el => el.id !== action.payload.id)
      if (updatedCard.length === state.card.length) {
        updatedCard.push(action.payload)
      }
      return {...state, card: updatedCard}
    }
    case ON_CARD_VISIBILITY_TOGGLE: {
      return {...state, isCardOpen: !state.isCardOpen}
    }

    default:
      return state
  }
};

export default reducer;
