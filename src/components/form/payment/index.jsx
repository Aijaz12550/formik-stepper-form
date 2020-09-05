import React from "react";
import TextField from "@material-ui/core/TextField";
import { Formik } from "formik";
import { paymentSchema } from "../../validation";

export const PaymentForm = ({submit,prevVal,step}) => {
  
 
  return (
    <div className="_card_">
      <h2>Add Payment</h2>
      <Formik
        initialValues={{...prevVal}}
        validationSchema={paymentSchema}
        onSubmit={(values, actions) => {
          console.log("values",values,"actions",actions)
          submit(2,{...values,...prevVal})
        }}
      >
        {(props) => {
          console.log("props ==>", props);
          return (
            <form onSubmit={props.handleSubmit}>
              <TextField
                error={!!props?.errors?.cardName}
                id="cardName"
                name="cardName"
                placeholder="card Name"
                type="text"
                onChange={props.handleChange}
                value={props.values.cardName}
              />

              <TextField
                error={!!props?.errors?.cardNumber}
                id="cardNumber"
                name="cardNumber"
                placeholder="421787517657657"
                type="number"
                onChange={props.handleChange}
                value={props.values.cardNumber}
              />
              <div>
                <button onClick={()=>submit(0)}>Back</button>
                <button type="submit">Next</button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
