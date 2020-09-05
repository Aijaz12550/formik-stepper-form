import { string, object, number } from "yup"; // for only what you need

export let Addressschema = object().shape({
  area: string().required(),
  city: string().required(),
});

export let paymentSchema = object().shape({
    cardName:string().required(),
    cardNumber: string().required().min(14),
})

