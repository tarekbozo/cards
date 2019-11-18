import {
  ADD_CARD,
  ADD_IMG,
  DELETE_CARD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CARD,
  CARD_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    case ADD_IMG:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_CARD:
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload.id ? action.payload : card
        )
      };
    case CARD_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
