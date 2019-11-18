import React, { useState, useContext, useEffect } from "react";
import CardContext from "../../context/card/cardContext";

const CardForm = () => {
  const cardContext = useContext(CardContext);

  const { addCard, updateCard, clearCurrent, current } = cardContext;

  useEffect(() => {
    if (current !== null) {
      setCard(current);
    } else {
      setCard({
        name: "",
        sureName: "",
        email: "",
        phone: ""
      });
    }
  }, [cardContext, current]);

  const [card, setCard] = useState({
    name: "",
    sureName: "",
    email: "",
    phone: ""
  });

  const { name, sureName, email, phone } = card;

  const onChange = e => setCard({ ...card, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (current === null) {
      addCard(card);
    } else {
      updateCard(card);
    }
    setCard({
      name: "",
      sureName: "",
      email: "",
      phone: ""
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Update Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder=" Sure name"
        name="sureName"
        value={sureName}
        onChange={onChange}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
            Upload
          </span>
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose image
          </label>
        </div>
      </div>
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-dark btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default CardForm;
