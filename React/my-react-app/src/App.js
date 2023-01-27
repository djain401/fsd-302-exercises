// import logo from "./logo.svg";
import "./App.css";
import CustomerInformation from "./CustomerInformation";
import CardExampleCardProps from "./CardExampleCardProps.js";
import { faker } from "@faker-js/faker";
import "semantic-ui-css/semantic.min.css";

function App() {
  // const customer = {
  //   firstName: "Divya",
  //   lastName: "Jain",
  // };
  // const animals = ["Horse", "Turtle", "Elephant", "Monkey"];
  // const displayArray = animals.map((item, index) => (
  //   <div key={index}>{item}</div>
  // ));
  // return (
  //   <div>
  //     <CustomerInformation customer={customer} />
  //     <div>The List contains:</div>
  //     {displayArray}
  //   </div>
  // );

  return <CardExampleCardProps />;
}

export default App;
