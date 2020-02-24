import React from "react";
import Form from "../form.js";
import "../../../setupTests.js";

import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Form /> component", () => {
  it("renders as expected", () => {
    const app = shallow(<Form />);

    expect(app.find("#methods").exists()).toBeTruthy();
  });
});
