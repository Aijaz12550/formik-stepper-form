import React, {memo} from "react";
import TextField from "@material-ui/core/TextField";
// import { Formik, useFormik } from "formik";
import { Addressschema } from "../../validation";
import { Formik,ErrorMessage,Field,Form } from "formik";
import * as Yup from 'yup';

export const Addressform = memo(({ submit,prevVal }) => {
  return (
    <div className="_card_">
      <h2>Add Address</h2>
      {/* <Formik
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
      </Formik> */}
        <Formik
       initialValues={prevVal}
       validationSchema={Yup.object({
         area: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         city: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         console.log('sdsad',values);
         
        submit(1,{...values})
       }}
     >
       <div className="_card_">

       <Form >
         <label htmlFor="area">Area Name</label>
         <Field name="area" type="text" />
         <ErrorMessage name="area" />
         <label htmlFor="city">city Name</label>
         <Field name="city" type="text" />
         <ErrorMessage name="city" />
         {/* <button }>Back </button> */}
         <button type="submit">Next</button>
       </Form>
       </div>
     </Formik>
    </div>
  );
}
)