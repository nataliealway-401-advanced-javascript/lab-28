import React from "react";
import Results from "../results.js";
import "../../../setupTests.js";

import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const app = shallow(<Results />);

describe("<Results /> component", () => {
  it("renders the results from the json data succesfully", () => {
    expect(app.find("#json").exists()).toBeTruthy();
  });

  xit("renders the headers from the json data", () => {
    expect(app.find("Headers").exists()).toBeTruthy();
  });

  xit("renders the response from the json data", () => {
    expect(app.find("Response").exists()).toBeTruthy();
  });




});