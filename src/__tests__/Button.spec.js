import React from "react";
import { create } from "react-test-renderer";

function Button(props) {
  return <button>Do nothing</button>;
}

describe("button component", () => {
  test("match snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
