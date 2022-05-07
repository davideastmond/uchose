export type TInsuranceProduct = {
  id: string;
  insurerName: Insurer;
  description: string;
  monthlyPrice: number;
};

export enum Insurer {
  Protecto = "protecto",
  Umbrella = "umbrella",
  Thor = "thor",
}

export const InsurerFriendlyName: { [key in Insurer]: string } = {
  [Insurer.Protecto]: "Protecto Insurance",
  [Insurer.Umbrella]: "Umbrella Insurance",
  [Insurer.Thor]: "Thor Insurance",
};
