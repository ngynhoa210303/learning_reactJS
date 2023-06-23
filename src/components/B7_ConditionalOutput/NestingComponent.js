import React from "react";
class NestingComponent extends React.Component {
  //Conditional (Câu điều kiện), ví dụ như If/Else là một công cụ được sử dụng rất nhiều với React. Nếu như Vue và Angular có v-hide/show, ng-hide/show thì React có cách render "điều kiện" riêng của nó.
  state = {
    showJob: false,
  };
  handleShow = (sts) => {
    this.setState({ showJob: !this.state.showJob });
  };
  render() {
    let { arrJobs } = this.props;
    let { showJob } = this.state;
    let check = showJob === true ? "showJob=true" : "showJob===false";
    console.log(">>check conditional : ", check);
    return (
      <>
        {/*C1: <div>
          {showJob === false && (
            <button onClick={(sts) => this.handleShow(sts)}>Show</button>
          )}
        </div>
        {showJob === true && (
          <>
            <div className="job-lists">
              {arrJobs.map((item) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} $
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={(sts) => this.handleShow(sts)}>Hide</button>
            </div>
          </>
        )} */}
        {/* C2: */}
        {showJob === false ? (
          <div>
            <button onClick={(sts) => this.handleShow(sts)}>Show</button>
          </div>
        ) : (
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
            <div>
              <button onClick={(sts) => this.handleShow(sts)}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default NestingComponent;
