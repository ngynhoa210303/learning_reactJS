import React from "react";
import NavTib from "../components/B12_ROUTE/Nav";
import Home from "../components/B12_ROUTE/Home";
import ListToDo from "../components/B11_CRUD_XayDungAppToDo/ListToDo";
import Form from "../components/B8_Split_Components_FCAS_Props/Form";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class RouteH extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavTib />
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
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default RouteH;
