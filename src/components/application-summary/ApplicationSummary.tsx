import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { IBaseQuestionProps } from "../definitions";

interface IApplicationSummary extends IBaseQuestionProps {
  applicationData?: { [keyof: string]: any };
}
function ApplicationSummary(props: IApplicationSummary) {
  const extractApplicationData = (applicationData: any) => {
    const jsxElements: JSX.Element[] = [];

    for (let dataElement of applicationData) {
      if (dataElement[0] !== "product") {
        jsxElements.push(
          <ListItem key={`product_${dataElement[0]}`}>
            {`${dataElement[0]} : ${dataElement[1]} `}
          </ListItem>
        );
      } else {
        Object.entries(dataElement[1]).forEach((productElement) => {
          if (productElement[0] === "monthlyPrice") {
            jsxElements.push(
              <ListItem key={`product_monthlyCost_${productElement[0]}`}>
                {`${(productElement[1] as number).toFixed(2)}$ monthly`}
              </ListItem>
            );
          } else {
            jsxElements.push(
              <ListItem key={`product_${productElement[1]}`}>
                {`${productElement[0]} : ${productElement[1]}`}
              </ListItem>
            );
          }
        });
      }
    }
    return jsxElements;
  };
  return (
    <div className="ApplicationSummary__main">
      <header>
        <h2>{props.label}</h2>
      </header>
      <List>
        {props.applicationData &&
          extractApplicationData(Object.entries(props.applicationData))}
      </List>
    </div>
  );
}

export default ApplicationSummary;
