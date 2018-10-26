var _jsxFileName = "/Users/josulliv101/node/demo-app/packages/ui-core/src/components/ReallyBigButton/__test__/ReallyBigButton.test.js";
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json"; // import { createShallow } from "@material-ui/core/test-utils";

import ReallyBigButton from "../"; // Using MUI `shallow` here so that coverage is 100%. Since componets are more deeply nested
// when wrapped with `withStyles` HOC, we want the underlying MUI components to be caught in snapshot.

describe("With Snapshot Testing", function () {
  // let shallow;
  beforeAll(function () {// shallow = createShallow({ dive: true });
  });
  it("renders", function () {
    var wrapper = shallow(React.createElement(ReallyBigButton, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Foo Barq"));
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});