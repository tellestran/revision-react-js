import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
import "./demo.css";
import Navbar from "../Navigation/Navbar";

class MyComponent extends React.Component {
  //key:value
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developers", salary: "500" },
      { id: "abcJob2", title: "Testers", salary: "400" },
      { id: "abcJob3", title: "Project managers", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  componentDidUpdate(preProvs, preState) {
    console.log("Component did Update", "current state", this.state);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  /* 
    JSX => return block
    fragment
    */

  //re-render
  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <Navbar />
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
