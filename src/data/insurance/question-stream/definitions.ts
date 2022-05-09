import { TInsuranceProduct } from "../definitions";

export interface IBaseQuestion {
  id: string;
  name: string;
  label: string;
  type:
    | "email"
    | "radio"
    | "numberInput"
    | "productSelection"
    | "productSubmit";
}

export interface ITextQuestion extends IBaseQuestion {}
export interface IRadioQuestion extends IBaseQuestion {
  options: TRadioOption[];
}
export interface INumberInput extends IBaseQuestion {
  min: number;
  max: number;
}

export interface IProductSelection extends IBaseQuestion {
  products: TInsuranceProduct[];
}

export interface IApplicationSubmit extends IBaseQuestion {
  applicationData: { [keyof: string]: string };
}

export type TRadioOption = {
  label: string;
  name: string;
};

export type TQuestion =
  | ITextQuestion
  | IRadioQuestion
  | INumberInput
  | IProductSelection
  | IApplicationSubmit;
