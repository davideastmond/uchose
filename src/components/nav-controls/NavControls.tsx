import { Stack, Button } from "@mui/material";

interface INavControlProps {
  onBackClicked: () => void;
  onNextClicked: () => void;
  onSubmitClicked?: () => void;
  backButtonVisible?: boolean;
  backButtonDisabled?: boolean;
  nextButtonVisible?: boolean;
  nextButtonDisabled?: boolean;
  submitButtonVisible?: boolean;
}

function NavControls(props: INavControlProps) {
  return (
    <div className="NavControls__main">
      {props.backButtonVisible && (
        <Button
          size="large"
          onClick={() => props.onBackClicked()}
          disabled={props.backButtonDisabled}
        >
          Back
        </Button>
      )}
      {props.nextButtonVisible && (
        <Button
          variant="contained"
          size="large"
          onClick={() => props.onNextClicked()}
          disabled={props.nextButtonDisabled}
        >
          Next
        </Button>
      )}
      {props.submitButtonVisible && (
        <Button
          variant="contained"
          size="large"
          onClick={props.onSubmitClicked}
        >
          Submit
        </Button>
      )}
    </div>
  );
}

export default NavControls;
