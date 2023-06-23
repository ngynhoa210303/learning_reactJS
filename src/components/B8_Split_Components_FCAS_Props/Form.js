import React from "react";
import NestingComponent from "./NestingComponent";
import AddComponent from "./AddComponent";
class Form extends React.Component {
  state = {
    arrJobs: [
      { id: "job 1", titleJob: "Developer", salary: "200" },
      { id: "job 2", titleJob: "Tester", salary: "500" },
      { id: "job 3", titleJob: "hont", salary: "200" },
    ],
  };

  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    let jobhah = this.state.arrJobs;
    jobhah.push(job);
    this.setState({
      // Add C1:
      arrJobs: [...this.state.arrJobs, job],
      // Add C2:
      // arrJobs: jobhah,
    });
  };
  deleteAJob = (job) => {
    let currenJobs = this.state.arrJobs;
    currenJobs = currenJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currenJobs,
    });
  };

  render() {
    return (
      <>
        {/* Xoa name id */}
        <AddComponent addNewJob={this.addNewJob} />
        <NestingComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}
export default Form;
