import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { TRadioOption } from "../../data/insurance/question-stream/definitions";
import { IBaseQuestionProps } from "../definitions";

interface IRadioChoiceProps extends IBaseQuestionProps {
  onSelectionChanged?: (data: { [keyof: string]: any }) => void;
  onValidateInput?: (valid: boolean) => void;
  options: TRadioOption[];
}

const Option = ({ name, label }: { name: string; label: string }) => {
  return <FormControlLabel value={name} control={<Radio />} label={label} />;
};

function RadioChoice(props: IRadioChoiceProps) {
  const handleSelectionChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.onSelectionChanged &&
      props.onSelectionChanged({ [props.name]: event.target.value });
    props.onValidateInput && props.onValidateInput(true);
  };
  return (
    <div className="RadioChoice__main">
      <header>
        <h2>{props.label}</h2>
      </header>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleSelectionChanged}
        >
          {props.options.map((option) => (
            <Option name={option.name} label={option.label} key={option.name} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioChoice;
