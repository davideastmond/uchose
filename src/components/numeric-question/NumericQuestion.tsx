import { IBaseQuestionProps } from "../definitions";
import NumericInput from "react-number-format";
interface INumericQuestionProps extends IBaseQuestionProps {
  onUserInputChanged?: (data: { [keyof: string]: number }) => void;
}

function NumericQuestion(props: INumericQuestionProps) {
  const handleUserInputTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.onUserInputChanged &&
      props.onUserInputChanged({ [props.name]: parseInt(event.target.value) });
  };
  return (
    <div className="NumericQuestion__main">
      <header>
        <h2>{props.label}</h2>
      </header>
      <div className="NumericQuestion__userInput">
        <NumericInput
          value={18}
          allowNegative={false}
          decimalScale={0}
          onChange={handleUserInputTextChange}
        />
      </div>
    </div>
  );
}

export default NumericQuestion;
