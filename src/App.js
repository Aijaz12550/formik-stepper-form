import React, { useState, useCallback } from "react";
import "./App.css";
import { Addressform, CheckoutSuccess, PaymentForm } from "./components/form";
import Stepper from "./components/stepper";

function App() {
  let [step, setStep] = useState(0);
  let [values, setValues] = useState({});
  const submit = useCallback(
    (newStep, val) => {
      setStep(newStep);
      setValues({ ...values, ...val });
      return;
    },
    [step]
  );
  // let ComponentToRender = [Addressform, PaymentForm, CheckoutSuccess][step]
  console.log("vvv", values);
  return (
    <div className="App">
      <header className="App-header">
        <Stepper step={step} />

        {step === 0 && <Addressform submit={submit} />}
        {step === 1 && <PaymentForm submit={submit} prevVal={values} />}
        {step === 2 && <CheckoutSuccess value={values} submit={submit} />}
      </header>
    </div>
  );
}

export default App;
