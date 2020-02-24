import React from "react";
import Form from "../form.js";
import "../../../setupTests.js";

import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const app = shallow(<Form />);

describe("<Form /> component", () => {
  it("renders the methods succesfully", () => {
    expect(app.find("#methods").exists()).toBeTruthy();
  });
  it('renders the inputs', () => {
    expect(app.find("input").exists()).toBeTruthy();
  });
  it('renders the fields succesfully', () => {
    expect(app.find("textarea").exists()).toBeTruthy();
  });

});
