import React from "react";
import NavTib from "../components/B12_ROUTE/Nav";
// import Home from "../components/B12_ROUTE/Home";
import Home from "../components/B15_Redux/Home";
import ListToDo from "../components/B11_CRUD_XayDungAppToDo/ListToDo";
import Form from "../components/B8_Split_Components_FCAS_Props/Form";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListUser from "../components/B14_Axios/ListUser";
import DetailUser from "../components/B14_Axios/DetailUser";

class RouteH extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavTib />
          {/* Switch chỉ có thể render 1 component duy nhất */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              <Form />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default RouteH;
