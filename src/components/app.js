import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import superagent from "superagent";
import Header from "./header/header";
import Form from "./form/form";
import Results from "./results/results.js";
import History from "./history/history.js";
import Footer from "./footer/footer.js";
import BasicAuth from "./authorization/basic/basicAuth.js";
import BearerAuth from "./authorization/bearer/bearer.js";

import "./app/app.scss";

/**
 * @class App
 * @description Holds state properties. Renders all elements being imported.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      method: "",
      requestbody: "",
      header: {},
      response: {},
      isTextboxDisable: false
    };
  }
  /**
   * @function handleMethods
   * @param  {} event
   * @description event listener that handles the methods selected from the form.
   */
  handleMethods = e => {
    let property = e.target.name;
    let value = e.target.value;
    if (value === "GET" || value === "DELETE") {
      this.setState({ isTextboxDisable: true });
    } else {
      this.setState({ isTextboxDisable: false });
    }
    this.setState({ [property]: value });
  };

  /**
   * @function callApi
   * @param {object} event
   * @description Makes a call to the specific url that was passed in, and parses the response and header object.
   */
  callApi = e => {
    e.preventDefault();
    let body = this.state.requestbody && JSON.parse(this.state.requestbody);
    superagent(this.state.method, this.state.url)
      .set("Content-Type", "application/json")
      .send(body)
      .then(res => {
        let header = res.header;
        let response = res.body;
        this.setState({ header, response });
      });
  };
  /**
   * @function saveHistory
   * @param  {object} obj
   * @description Function for saving the recent url search history
   */
  saveHistory = obj => {
    this.setState((prevState, props) => {
      return { history: prevState.history.concat(obj) };
    });
  };

  saveHistory;
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" />

          <Route exact path="/history">
            <History history={this.state.history} callApi={this.callApi} />
          </Route>
        </Switch>
        <Form
          callApi={this.callApi}
          handleMethods={this.handleMethods}
          method={this.state.method}
        />
        <Results header={this.header} response={this.response} />
        <BasicAuth username={this.name} password={this.password} />
        <BearerAuth bearer={this.bearer} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
