import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //   console.log(res.data.data);
    // });
    let res = await axios.get("https://reqres.in/api/users?page=1");
    // console.log(res.data.data);
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleViewDetailUser = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { listUser } = this.state;
    //file view
    return (
      <div className="container">
        <div className="title">All:</div>
        <div className="content">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  className="child"
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  {index + 1} - {item.first_name}
                  {item.last_name}
                  {/* {item.email}{" "} */}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
