import { Insurer } from "./insurers";

export type TInsurancePackage = {
  insurerName: Insurer;
  description: string;
  monthlyPrice: number;
};
