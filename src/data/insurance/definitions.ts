export type TInsurancePackage = {
  insurerName: Insurer;
  description: string;
  monthlyPrice: number;
};

export enum Insurer {
  Protecto = "protecto",
  Umbrella = "umbrella",
  Thor = "thor",
}
