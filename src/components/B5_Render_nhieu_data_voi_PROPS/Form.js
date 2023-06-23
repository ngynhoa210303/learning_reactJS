import React from "react";
import NestingComponent from "./NestingComponent";
class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "job 1", title: "Developer", salary: "200$" },
      { id: "job 2", title: "Tester", salary: "500$" },
      { id: "job 3", title: "hont", salary: "200" },
    ],
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> check data input: ", this.state);
  };
  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <div>Heloo hoho</div>
        {/* Xoa name id */}
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        <NestingComponent
          name={this.state.firstName}
          age={"20"}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}
export default Form;
