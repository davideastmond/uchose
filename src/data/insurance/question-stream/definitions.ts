export interface IBaseQuestion {
  id: string;
  name: string;
  label: string;
  type: "text" | "radio" | "numberInput";
}

export interface ITextQuestion extends IBaseQuestion {}
export interface IRadioQuestion extends IBaseQuestion {
  options: TRadioOption[];
}
export interface INumberInput extends IBaseQuestion {
  min?: number;
  max?: number;
}

export type TRadioOption = {
  label: string;
};

export type TQuestion = ITextQuestion | IRadioQuestion | INumberInput;
