import React, { useReducer } from "react";
import uuid from "uuid";
import CardContext from "./cardContext";
import cardReducer from "./cardReducer";
import {
  ADD_CARD,
  ADD_IMG,
  DELETE_CARD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CARD
} from "../types";

const CardState = props => {
  const initalState = {
    cards: [
      {
        id: 1,
        name: "Lara",
        sureName: " Larson",
        email: "lara@gmail.com",
        phone: "070111111",
        img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
      },
      {
        id: 2,
        name: "Johan ",
        sureName: " Somath",
        email: "johan@gmail.com",
        phone: "070222222",
        img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
      },
      {
        id: 3,
        name: "Tarek ",
        sureName: " Bouzo",
        email: "tarekk@gmail.com",
        phone: "070333333",
        img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
      }
    ],
    current: null,
    error: null
  };

  const [state, dispatch] = useReducer(cardReducer, initalState);

  // uplod image
  const addImg = card => {
    card.id = uuid.v4();
    dispatch({
      type: ADD_IMG,
      payload: card
    });
  };

  // Add card
  const addCard = card => {
    card.id = uuid.v4();
    dispatch({
      type: ADD_CARD,
      payload: card
    });
  };

  // Delete card
  const deleteCard = id => {
    dispatch({ type: DELETE_CARD, payload: id });
  };

  // Set curent card
  const setCurrent = card => {
    dispatch({
      type: SET_CURRENT,
      payload: card
    });
  };
  // Clear curent card
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update card
  const updateCard = card => {
    dispatch({
      type: UPDATE_CARD,
      payload: card
    });
  };

  return (
    <CardContext.Provider
      value={{
        cards: state.cards,
        current: state.current,
        error: state.error,
        addCard,
        addImg,
        deleteCard,
        setCurrent,
        clearCurrent,
        updateCard
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
