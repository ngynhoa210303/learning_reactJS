import React from "react";
// import ChildComponent from "./ChildComponent";
class NestingComponent extends React.Component {
  state = {
    name: "",
    age: "",
  };

  render() {
    console.log(">>> call render: ", this.state);
    let { arrJobs } = this.props; //this.props bản chất là OBJ
    return (
      <>
        <div className="job-lists">
          {arrJobs.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title} - {item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default NestingComponent;
