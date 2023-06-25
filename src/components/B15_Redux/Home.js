import React from "react";
import Color from "../B13_HOC/Color";
import logo from "../../assets/images/hoh.png";
import { connect } from "react-redux";
class Home extends React.Component {
  delete = (user) => {
    // console.log(user);
    this.props.deleteUserRedux(user);
  };
  add = () => {
    this.props.addUserRedux();
  };
  render() {
    // console.log(">>check props", this.props.dataRedux);
    let dataRedux = this.props.dataRedux;
    return (
      <>
        <div>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src={logo} style={{ marginTop: "20px" }}></img>
        </div>
        <div>
          {dataRedux &&
            dataRedux.length > 0 &&
            dataRedux.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1}-{item.name}{" "}
                  <span
                    onClick={() => this.delete(item)}
                    style={{ cursor: "pointer" }}
                  >
                    &nbsp; x
                  </span>
                </div>
              );
            })}
          <button onClick={() => this.add()} style={{ cursor: "pointer" }}>
            Add new
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
    //Tên có thể tùy chỉnh
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({
        type: "DELETE_USER", //liên quan đến action.type của rootReducer
        payload: userDelete,
      }),
    addUserRedux: () =>
      dispatch({
        type: "CREATE_USER", //liên quan đến action.type của rootReducer
        // payload: userDelete,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
// export default withRouter(Home);
