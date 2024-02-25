import React from "react";
import Card from "../card/Card";
import "./wallet.css";

const Wallet = ({ cards, activeCardIndex, setActiveCardIndex }) => {
  const cardColors = ["#000080", "#228B22", "#DC143C", "#4169E1"];

  return (
    <div className="wallet-container">
      {cards.map((card, index) => (
        <div className="card-container" key={index}>
          <Card
            logo={card.logo}
            number={card.number}
            holder={card.holder}
            date={card.date}
            ccv={card.ccv}
            isActive={index === activeCardIndex}
            onClick={() => {
              if (index === activeCardIndex) {
                setActiveCardIndex(-1);
              } else {
                setActiveCardIndex(index);
              }
            }}
            // Pass background color to Card component
            bgColor={cardColors[index % cardColors.length]}
          />
        </div>
      ))}
    </div>
  );
};

export default Wallet;
