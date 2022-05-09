import { IBaseQuestionProps } from "../definitions";
import NumericInput from "react-number-format";
interface INumericQuestionProps extends IBaseQuestionProps {
  onUserInputChanged?: (data: { [keyof: string]: number }) => void;
  onValidateInput?: (valid: boolean) => void;
  min?: number;
  max?: number;
}

const isValid = ({
  min,
  max,
  value,
}: {
  min?: number;
  max?: number;
  value: number;
}): boolean => {
  if (isNaN(value)) return false;

  if (min && value < min) return false;
  if (max && value > max) return false;
  return true;
};

function NumericQuestion(props: INumericQuestionProps) {
  const handleUserInputTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.onUserInputChanged &&
      props.onUserInputChanged({ [props.name]: parseInt(event.target.value) });
    props.onValidateInput &&
      props.onValidateInput(
        isValid({
          min: props.min,
          max: props.max,
          value: parseInt(event.target.value),
        })
      );
  };
  return (
    <div className="NumericQuestion__main">
      <header>
        <h2>{props.label}</h2>
      </header>
      <div className="NumericQuestion__userInput">
        <NumericInput
          allowNegative={false}
          decimalScale={0}
          onChange={handleUserInputTextChange}
        />
      </div>
    </div>
  );
}

export default NumericQuestion;
