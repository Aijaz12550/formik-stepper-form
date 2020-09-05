import React from "react";

export const CheckoutSuccess = ({ submit, value }) => {
  console.log("values ==>", value);
  return (
    <div className="_card_">
      Order Review
      <p>Area: {value.area}</p>
      <p>City: {value.city} </p>
      <p>Card Name: {value.cardName}</p>
      <p>City: {value.cardNumber} </p>
      <hr />
      <p>Total: $10</p>
      <div>
        <button onClick={() => submit(1)}>back</button>
      </div>
    </div>
  );
};
