import React from "react";
import Header from "../header.js";
import "../../../setupTests.js";

import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Header /> component", () => {
  it("renders the header as expected", () => {
    const app = shallow(<Header />);

    expect(app.find("header").exists()).toBeTruthy();
  });
});
