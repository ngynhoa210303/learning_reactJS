import React from "react";
// import { withRouter } from "react-router";
import Color from "../B13_HOC/Color";
class Home extends React.Component {
  // componentDidMount() {
  //   //Chờ 2s chuyển sang trang todo
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 2000);
  // }
  // HOC - Higher Order Components
  render() {
    // console.log(">>check props", this.props);
    return <div>Home</div>;
  }
}
export default Color(Home);
// export default withRouter(Home);
