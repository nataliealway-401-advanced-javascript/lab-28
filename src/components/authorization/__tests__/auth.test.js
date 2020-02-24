import React from "react";
import BasicAuth from "../basic/basicAuth.js";
import "../../../setupTests.js";

import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const app = shallow(<BasicAuth />);

describe("<BasicAuth /> component", () => {
  it("renders the basic authorization form succesfully", () => {
    expect(app.find("#basicAuth").exists()).toBeTruthy();
  });
  it("renders the username input succesfully", () => {
    expect(app.find("#username").exists()).toBeTruthy();
  });
  it("renders the password input succesfully", () => {
    expect(app.find("#password").exists()).toBeTruthy();
  });
});