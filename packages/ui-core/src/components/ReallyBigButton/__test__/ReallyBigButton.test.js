import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
// import { createShallow } from "@material-ui/core/test-utils";
import ReallyBigButton from "../";

// Using MUI `shallow` here so that coverage is 100%. Since componets are more deeply nested
// when wrapped with `withStyles` HOC, we want the underlying MUI components to be caught in snapshot.
describe("With Snapshot Testing", () => {
  // let shallow;

  beforeAll(() => {
    // shallow = createShallow({ dive: true });
  });

  it("renders", () => {
    const wrapper = shallow(<ReallyBigButton>Foo Barq</ReallyBigButton>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
