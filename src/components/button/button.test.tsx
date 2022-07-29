import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "./button";

afterEach(cleanup);

test("renders learn react link", () => {
  render(<Button label="1234" />);
  const linkElement = screen.getByText(/1234/i);
  expect(linkElement).toBeInTheDocument();
});

test("render button correctly1", () => {
  render(<Button label="click me please" />);
  const linkElement = screen.getByTestId("button");
  expect(linkElement).toHaveTextContent("click me please");
});

test("matches snapshot", () => {
  const tree = renderer.create(<Button label="ok" />).toJSON();
  expect(tree).toMatchSnapshot();
});
