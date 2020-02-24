import React from "react";
import Footer from "../footer";
import "../../../setupTests.js";

import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Footer /> component", () => {
  it("renders the footer as expected", () => {
    const app = shallow(<Footer />);

    expect(app.find("footer").exists()).toBeTruthy();
  });
});