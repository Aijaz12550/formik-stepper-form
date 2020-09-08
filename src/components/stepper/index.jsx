import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Addressform, CheckoutSuccess, PaymentForm } from "../form";

const useStyles = makeStyles(() => ({
  card: {
    background: "transparent",
    width: "100%",
    maxWidth: "600px"
  },
}));

function getSteps() {
  return [
    "Address",
    "Payment",
    "Review",
  ];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const steps = getSteps();
  let [step, setStep] = useState(0);
  let [values, setValues] = useState({area:'',city:'',cardName:"",cardNumber:''});
  const submit =
    (newStep, val) => {
      console.log('newStep',newStep, 'val', val);
      
      setStep(newStep);
      setValues({ ...values, ...val });
      return;
    }
  console.log("vvv", values);



  return (
    <Fragment>

      <Stepper className={classes.card} activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {step === 0 && <Addressform submit={submit} prevVal={values} />}
      {step === 1 && <PaymentForm submit={submit} prevVal={values} />}
      {step === 2 && <CheckoutSuccess value={values} submit={submit} />}
    </Fragment>
  );
}
