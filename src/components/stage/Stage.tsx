import {
  INumberInput,
  IProductSelection,
  IRadioQuestion,
  TQuestion,
} from "../../data/insurance/question-stream/definitions";
import { EmailQuestion } from "../email-question";
import { ProductSelection } from "../product-selection";
import { NumericQuestion } from "../numeric-question";
import { NavControls } from "../nav-controls";
import { useState, useRef } from "react";
import { RadioChoice } from "../radio-choice";
import { ApplicationSummary } from "../application-summary";
import { submitApplication } from "../../services/submit-application";
import { Typography } from "@mui/material";

interface IStageProps {
  stream: TQuestion[];
}

function Stage(props: IStageProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [canProgress, setCanProgress] = useState<boolean>(false);
  const [endOfStream, setEndOfStream] = useState<boolean>(false);
  const answersRef = useRef<{ [keyof: string]: any }>({});

  const handleUserInputChange = (data: {
    [keyof: string]: string | number | any;
  }) => {
    answersRef.current = {
      ...answersRef.current,
      ...data,
    };
  };

  const handleNextButtonClicked = () => {
    setCurrentIndex(currentIndex + 1);
    setCanProgress(false);
  };

  const handleSubmitApplication = async () => {
    try {
      await submitApplication(answersRef.current);
      setEndOfStream(true);
    } catch (exception) {
      setEndOfStream(true);
    }
  };
  const getScene = (data: TQuestion) => {
    switch (data && data.type) {
      case "email":
        return (
          <EmailQuestion
            onValidateInput={setCanProgress}
            onUserInputChanged={handleUserInputChange}
            id={data.id}
            name={data.name}
            label={data.label}
          />
        );
      case "productSelection":
        return (
          <ProductSelection
            id={data.id}
            name={data.name}
            label={data.label}
            products={(data as IProductSelection).products}
            onSelectionChanged={handleUserInputChange}
            onValidateInput={setCanProgress}
          />
        );
      case "numberInput":
        return (
          <NumericQuestion
            onUserInputChanged={handleUserInputChange}
            id={data.id}
            name={data.name}
            label={data.label}
            min={(data as INumberInput).min}
            max={(data as INumberInput).max}
            onValidateInput={setCanProgress}
          />
        );
      case "radio":
        return (
          <RadioChoice
            id={data.id}
            name={data.name}
            label={data.label}
            options={(data as IRadioQuestion).options}
            onSelectionChanged={handleUserInputChange}
            onValidateInput={setCanProgress}
          />
        );
      case "productSubmit":
        return (
          <ApplicationSummary
            id={data.id}
            name={data.name}
            label={data.label}
            applicationData={answersRef.current}
          />
        );
      default:
        return <>Error: This element has not been defined.</>;
    }
  };
  return (
    <div className="Stage__main">
      {!endOfStream && getScene(props.stream[currentIndex])}
      {!endOfStream && (
        <NavControls
          backButtonVisible={currentIndex !== 0}
          nextButtonVisible={currentIndex < props.stream.length}
          submitButtonVisible={
            props.stream[currentIndex].type === "productSubmit"
          }
          nextButtonDisabled={!canProgress}
          onBackClicked={() => setCurrentIndex(currentIndex - 1)}
          onNextClicked={handleNextButtonClicked}
          onSubmitClicked={handleSubmitApplication}
        />
      )}
      {endOfStream && <Typography>Thanks! 😁</Typography>}
    </div>
  );
}

export default Stage;
