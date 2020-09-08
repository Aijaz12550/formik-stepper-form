// import React from "react";
// import { Formik,ErrorMessage,Field,Form } from "formik";
// import { paymentSchema } from "../../validation";
// export const PaymentForm = ({submit,prevVal,step}) => {
  
 
//   return (
//     <div className="_card_">
//       <h2>Add Payment</h2>
       
//       <Formik
//        initialValues={prevVal}
//        validationSchema={paymentSchema}
//        onSubmit={(values, { setSubmitting }) => {
//          console.log('setSubmitting',setSubmitting)
//          setTimeout(() => {
//            console.log('sdsdsdsd',setSubmitting,values)
//            submit(2,{...values,})
//            setSubmitting(true);
//          }, 400);
//        }}
//      >
//          <Form >
//            <Field type="cardName" name="cardName" />
//            <ErrorMessage name="cardName" component="div" />
//            <Field type="cardNumber" name="cardNumber" />
//            <ErrorMessage name="cardNumber" component="div" />
//            <button onClick={() => submit(0)}>back</button>
//            <button type="submit">
//              Next
//            </button>
//          </Form>
       
//      </Formik>
//     </div>
//   );
// };




import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 
 export const PaymentForm = ({submit,prevVal}) => {
   return (
     <Formik
       initialValues={prevVal}
       validationSchema={Yup.object({
         cardName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         cardNumber: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
        })}
       onSubmit={(values) => {
         
         submit(2,{...values,area:prevVal?.area,city:prevVal?.city})
         console.log('...values',values);
       }}
     >
       <div className="_card_">

       <Form >
         <label htmlFor="cardName">First Name</label>
         <Field name="cardName" type="text" />
         <ErrorMessage name="cardName" />
         <label htmlFor="cardNumber">Last Name</label>
         <Field name="cardNumber" type="text" />
         <ErrorMessage name="cardNumber" />
        
         <button onClick={()=>submit(0)}>Back </button>
         <button type="submit">Next</button>
       </Form>
       </div>
     </Formik>
   );
 };