import React from "react";
import "./demo.css";

class ChildComponent extends React.Component {
  //re-render
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    this.props.deleteJob(job);
  };

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>> check conditional: ", check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button className="btn" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>{" "}
                    <span
                      className="btn"
                      onClick={() => {
                        this.handleOnClickDelete(item);
                      }}
                    >
                      X
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button className="btn" onClick={() => this.handleShowHide()}>
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {

//     let { arrJobs } = props;

//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }

//                     })

//                 }

//             </div>
//         </>
//     )
// }
export default ChildComponent;
