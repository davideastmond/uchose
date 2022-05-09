import {
  InsurerFriendlyName,
  TInsuranceProduct,
} from "../../data/insurance/definitions";
import { IBaseQuestionProps } from "../definitions";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControl, FormControlLabel } from "@mui/material";

interface IProductSelectionProps extends IBaseQuestionProps {
  onSelectionChanged?: (data: { product: { [keyof: string]: any } }) => void;
  onValidateInput?: (valid: boolean) => void;
  products: TInsuranceProduct[];
}

function ProductSelection(props: IProductSelectionProps) {
  const renderPanel = (product: TInsuranceProduct) => {
    const panelId: string = `panel-${product.id}`;
    const handlePanelClick = () => {
      props.onSelectionChanged &&
        props.onSelectionChanged({
          product: {
            insurerName: product.insurerName,
            description: product.description,
            monthlyPrice: product.monthlyPrice,
          },
        });
      props.onValidateInput && props.onValidateInput(true);
    };

    return (
      <Accordion key={`key-${panelId}`}>
        <AccordionSummary
          expandIcon={<InfoIcon color="info" />}
          aria-controls={`${panelId}-content`}
          id={`${panelId}-header`}
        >
          <FormControlLabel
            value={`radio-${product.id}`}
            control={<Radio />}
            sx={{ width: "33%", flexShrink: 0 }}
            label={InsurerFriendlyName[product.insurerName]}
            onClick={handlePanelClick}
          />
          <div className="ProductSelection__priceData">
            {`${product.monthlyPrice.toFixed(2)}$ / month`}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{product.description}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  };
  return (
    <div className="ProductSelection__main">
      <FormControl>
        <header>
          <h2>{props.label}</h2>
        </header>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          id={"radiogroup"}
        >
          {props.products.map((product) => renderPanel(product))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default ProductSelection;
