import React from "react";
import Cards from "../cards/Cards";
import CardForm from "../cards/CardForm";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <CardForm />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
