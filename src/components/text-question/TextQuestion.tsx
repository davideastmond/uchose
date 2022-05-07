import { TextField, Typography } from "@mui/material";
import { IBaseQuestionProps } from "../definitions";
import React from "react";

interface ITextQuestionProps extends IBaseQuestionProps {
  onUserInputChanged: (data: string) => void;
}

function TextQuestion(props: ITextQuestionProps) {
  const handleUserInputTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.onUserInputChanged(event.target.value);
  };
  return (
    <div className="TextQuestion__main">
      <div className="TextQuestion__prompt">
        <Typography>{props.label}</Typography>
      </div>
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

export default TextQuestion;
