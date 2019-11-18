import React, { Fragment, useContext } from "react";
import CardItem from "./CardItem";
import CardContext from "../../context/card/cardContext";

const Contacts = () => {
  const cardContext = useContext(CardContext);

  const { cards } = cardContext;

  return (
    <Fragment>
      {cards.map(card => (
        <CardItem key={card.id} card={card} />
      ))}
    </Fragment>
  );
};

export default Contacts;
