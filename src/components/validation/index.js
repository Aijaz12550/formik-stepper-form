import { string, object, number } from "yup"; // for only what you need
import * as Yup from "yup";

export let Addressschema = object().shape({
  area: string().required(),
  city: string().required(),
});

export let paymentSchema = object({
  cardName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        cardNumber: Yup.string()
          .min(20)
          .required('Required')
})

