import React from "react";
import ChildComponent from "./ChildComponent";
class NestingComponent extends React.Component {
  state = {
    name: "",
    age: "",
  };

  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <ChildComponent name={" child one"} age={12} />
        <ChildComponent name={" child two"} age={25} />
        <ChildComponent name={" child three"} age={30} />
      </>
    );
  }
}
export default NestingComponent;
