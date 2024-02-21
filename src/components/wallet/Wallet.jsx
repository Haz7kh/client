import React from "react";
import Card from "../card/Card";
import cards from "../../data/data";

const Wallet = ({ activeCardIndex, setActiveCardIndex }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <Card
          key={index}
          logo={card.logo}
          number={card.number}
          holder={card.holder}
          date={card.date}
          ccv={card.ccv}
          isActive={index === activeCardIndex}
          onClick={() => setActiveCardIndex(index)}
        />
      ))}
    </div>
  );
};

export default Wallet;
