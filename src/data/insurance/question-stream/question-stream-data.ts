import { insuranceProducts } from "../insurance-packages";
import { TQuestion } from "./definitions";

export const questionStream: TQuestion[] = [
  {
    id: "000",
    type: "productSelection",
    name: "productSelection",
    label: "Select an insurance package",
    products: insuranceProducts,
  },
  {
    id: "001",
    name: "email",
    label: "What is your e-mail?",
    type: "text",
  },
  {
    id: "002",
    name: "age",
    label: "What is your age?",
    min: 18,
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
      },
      {
        label: "Female",
      },
      {
        label: "Other",
      },
    ],
  },
];
