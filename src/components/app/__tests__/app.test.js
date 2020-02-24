import React from "react";
import App from "../../app.js";
import "../../../setupTests.js"

describe("`<App/>` component", () => {
  xit("renders the application succesfully", () => {
    const app = global.shallow(<App />);
    expect(app.find(".App").exists()).toBeTruthy();
  });

  it("renders the header succesfully", () => {
    const app = global.mount(<App />);
    expect(app.find("header").exists()).toBeTruthy();
  });

  it("renders the footer succesfully", () => {
    const app = global.mount(<App />);
    expect(app.find("footer").exists()).toBeTruthy();
  });

  it("renders the Form succesfully", () => {
    const app = global.mount(<App />);
    expect(app.find("form").exists()).toBeTruthy();
  });

  it("renders the data succesfully", () => {
    const app = global.mount(<App />);
    expect(app.find("#json").exists()).toBeTruthy();
  });

});