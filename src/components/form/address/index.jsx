import React, {memo} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Formik, useFormik } from "formik";
import { Addressschema } from "../../validation";

export const Addressform = memo(({ submit,prevVal }) => {
  return (
    <div className="_card_">
      <h2>Add Address</h2>
      <Formik
        initialValues={prevVal}
        validationSchema={Addressschema}
        onSubmit={(values, actions) => {
          console.log("values",values,"actions",actions)
          submit(1,{...values,})
        }}
      >
        {(props) => {
          console.log("props ==>", props);
          return (
            <form onSubmit={props.handleSubmit}>
              <TextField
                error={!!props?.errors?.area}
                id="area"
                name="area"
                placeholder="Abc Area"
                type="text"
                onChange={props.handleChange}
                value={props.values.area}
              />

              <TextField
                error={!!props?.errors?.city}
                id="city"
                name="city"
                placeholder="Karachi"
                type="text"
                onChange={props.handleChange}
                value={props.values.city}
              />
              <div>
                <button disabled>Back</button>
                <button type="submit">Next</button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
)