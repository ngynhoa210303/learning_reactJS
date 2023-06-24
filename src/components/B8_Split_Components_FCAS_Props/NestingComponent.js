import React from "react";
import "../../styles/NestingB8.scss";
class NestingComponent extends React.Component {
  //Conditional (Câu điều kiện), ví dụ như If/Else là một công cụ được sử dụng rất nhiều với React. Nếu như Vue và Angular có v-hide/show, ng-hide/show thì React có cách render "điều kiện" riêng của nó.
  state = {
    showJob: false,
  };
  handleShow = () => {
    this.setState({ showJob: !this.state.showJob });
  };
  handleOnclickDelete = (job) => {
    console.log(">>> handleOnclickDelete: ", job);
    this.props.deleteAJob(job);
  };
  //2 component cơ bản thể hiện vòng đời của react
  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">> run didupdate: ",
      "prev state: ",
      prevState,
      " current state: ",
      this.state
    );
  }
  componentDidMount = () => {
    console.log(">>> run componentDidMount");
  };
  render() {
    let { arrJobs } = this.props;
    let { showJob } = this.state;
    // let check = showJob === true ? "showJob=true" : "showJob===false";
    // console.log(">>check conditional : ", check);
    return (
      <>
        {/* C2: */}
        {showJob === false ? (
          <div>
            <button
              onClick={() => this.handleShow()}
              style={{ backgroundColor: "pink", color: "white" }}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item) => {
                return (
                  <div key={item.id}>
                    {item.titleJob} - {item.salary}$ <></>
                    <span>
                      <button
                        onClick={() => this.handleOnclickDelete(item)}
                        className="btn-submit"
                      >
                        x
                      </button>
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShow()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default NestingComponent;
