import React from "react";
import History from "../history.js";
import "../../../setupTests.js";

import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const app = shallow(<History />);

describe("<History/> component", () => {
  it("renders the history succesfully", () => {
    expect(app.find(".history").exists()).toBeTruthy();
  });


});