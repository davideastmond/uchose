import { TextField } from "@mui/material";
import { IBaseQuestionProps } from "../definitions";
import React from "react";
import { isValidEmail } from "../../utils/email-validator";

interface ITextQuestionProps extends IBaseQuestionProps {
  onUserInputChanged?: (data: { [keyof: string]: string }) => void;
  onValidateInput?: (valid: boolean) => void;
}

function EmailQuestion(props: ITextQuestionProps) {
  const handleUserInputTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.onValidateInput &&
      props.onValidateInput(isValidEmail(event.target.value));
    props.onUserInputChanged &&
      props.onUserInputChanged({ [props.name]: event.target.value });
  };
  return (
    <div className="TextQuestion__main">
      <header>
        <h2>{props.label}</h2>
      </header>
      <div className="TextQuestion__userInput">
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={handleUserInputTextChange}
        />
      </div>
    </div>
  );
}

export default EmailQuestion;
