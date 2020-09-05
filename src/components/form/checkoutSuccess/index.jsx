import React from "react";

export const CheckoutSuccess = ({ submit, value }) => {
  console.log("values ==>", value);
  return (
    <div className="_card_">
      Order Review
      <h4>Area: {value.area}</h4>
      <h4>City: {value.city} </h4>
      <h4>Card Name: {value.cardName}</h4>
      <h4>City: {value.cardNumber} </h4>
      <hr />
      <p>Total: $10</p>
      <div>
        <button onClick={() => submit(1)}>back</button>
      </div>
    </div>
  );
};
