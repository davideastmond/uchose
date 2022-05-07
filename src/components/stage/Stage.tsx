import { useState } from "react";
import { TQuestion } from "../../data/insurance/question-stream/definitions";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { TextQuestion } from "../text-question";

interface IStageProps {
  stream: TQuestion[];
}

function Stage(props: IStageProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleUserInputChange = (data: string | number) => {
    console.log(data);
  };
  const getScene = (data: TQuestion) => {
    switch (data && data.type) {
      case "text":
        return (
          <TextQuestion
            onUserInputChanged={handleUserInputChange}
            id={data.id}
            name={data.name}
            label={data.label}
          />
        );
      case "numberInput":
        return <></>;
      default:
        return <> Element not defined, returning a dummy</>;
    }
  };
  return (
    <div className="Stage__main">
      {getScene(props.stream[currentIndex])}
      <Stack direction="row" spacing={2}>
        <Button size="large" onClick={() => setCurrentIndex(currentIndex - 1)}>
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
}

export default Stage;
