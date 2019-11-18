import React, { useContext } from "react";
import PropTypes from "prop-types";
import CardContext from "../../context/card/cardContext";

const CardItem = ({ card }) => {
  const cardContext = useContext(CardContext);
  const { deleteCard, setCurrent, clearCurrent } = cardContext;

  const { id, name, sureName, email, phone, img } = card;

  const onDelete = () => {
    deleteCard(id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <span>
        <img
          className="rounded-circle"
          style={{
            float: "right",
            marginRight: 50,
            width: 100,
            height: 100
          }}
          alt="img"
          src={img}
          data-holder-rendered="true"
        />
      </span>
      <h3 className="text-dark text-left"> Name : {name}</h3>
      <h3 className="text-dark text-left"> Sure name : {sureName}</h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open fa-fw" />
            &nbsp; {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone fa-fw" />
            &nbsp; {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(card)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

CardItem.prototype = {
  card: PropTypes.object.isRequired
};

export default CardItem;
