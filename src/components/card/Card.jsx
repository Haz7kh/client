import React from "react";
import "./card.css";
import { FaWifi } from "react-icons/fa6";
import { FcSimCardChip } from "react-icons/fc";

const Card = ({
  logo,
  number,
  holder,
  date,
  isActive,
  onClick,
  ccv,
  bgColor,
}) => {
  // Inline style to set background color
  const cardFrontStyle = {
    backgroundColor: bgColor,
  };

  return (
    <div
      className={`card-container ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="card">
        <div className="card-front" style={cardFrontStyle}>
          {" "}
          {/* Apply the style here */}
          <div className="wifi">
            <FaWifi />
            <FcSimCardChip />
          </div>
          <div className="card-logo">{logo}</div>
          <div className="card-number">{number}</div>
          <div className="card-expiry">{date}</div>
          <div className="card-holder">{holder}</div>
          <div className="ccv">CCV {ccv}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
