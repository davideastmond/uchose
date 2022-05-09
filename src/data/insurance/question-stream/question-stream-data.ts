import { insuranceProducts } from "../insurance-packages";
import { TQuestion } from "./definitions";

export const questionStream: TQuestion[] = [
  {
    id: "000",
    type: "productSelection",
    name: "package",
    label: "Select an insurance package",
    products: insuranceProducts,
  },
  {
    id: "001",
    name: "email",
    label: "What is your e-mail?",
    type: "email",
  },
  {
    id: "002",
    name: "age",
    label: "What is your age?",
    min: 0,
    max: 199,
    type: "numberInput",
  },
  {
    id: "003",
    name: "gender",
    label: "What is your gender?",
    type: "radio",
    options: [
      {
        label: "Male",
        name: "male",
      },
      {
        label: "Female",
        name: "female",
      },
      {
        label: "Other",
        name: "other",
      },
    ],
  },
  {
    id: "004",
    name: "productSubmit",
    label: "Verify and submit",
    type: "productSubmit",
  },
];
