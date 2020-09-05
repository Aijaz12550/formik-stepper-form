import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles(() => ({
  card: {
    background: "transparent",
    width:"100%",
    maxWidth:"600px"
  },
}));

function getSteps() {
  return [
    "Address",
    "Payment",
    "Review",
  ];
}

export default function HorizontalLabelPositionBelowStepper(props) {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <Stepper className={classes.card} activeStep={props.step} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
