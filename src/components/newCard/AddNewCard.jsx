import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./new-card.css";
const AddNewCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpireDate, setCardExpireDate] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear the form after submission
    setCardNumber("");
    setCardExpireDate("");
    setCardHolderName("");
    setCvv("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cardNumber">Card Number:</label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Enter card number"
      />
      <label htmlFor="cardExpireDate">Card Expire Date (MM/YY):</label>
      <input
        type="text"
        id="cardExpireDate"
        name="cardExpireDate"
        value={cardExpireDate}
        onChange={(e) => setCardExpireDate(e.target.value)}
        placeholder="MM/YY"
      />
      <label htmlFor="cardHolderName">Card Holder Name:</label>
      <input
        type="text"
        id="cardHolderName"
        name="cardHolderName"
        value={cardHolderName}
        onChange={(e) => setCardHolderName(e.target.value)}
        placeholder="Enter card holder name"
      />
      <label htmlFor="cvv">CVV:</label>
      <input
        type="password"
        id="cvv"
        name="cvv"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        placeholder="Enter CVV"
      />
      <button type="submit">Add Card</button>
      <Link to="/" className="add-new-card-button">
        Back to Home
      </Link>
    </form>
  );
};

export default AddNewCard;
