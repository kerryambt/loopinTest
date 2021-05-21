import React from "react";
import { render } from "@testing-library/react";
import MoodInput from "../components/moodInput";

test("if mood passed in, change background colour", () => {
  const component = render(<MoodInput mood="happy" />);
  const container = component.container.firstChild;
  expect(container).toHaveClass("bg-success");
});

test("if no mood passed in, white bg", () => {
  const component = render(<MoodInput mood={undefined} />);
  const container = component.container.firstChild;
  expect(container).toHaveClass("bg-white");
});

test("if mood passed in, show edit button", () => {
  const component = render(<MoodInput mood="happy" />);
  const button = component.queryByTestId("editButton");
  expect(button).toBeInTheDocument();
});

test("if no mood passed in, don't show edit button", () => {
  const component = render(<MoodInput mood={undefined} />);
  const button = component.queryByTestId("editButton");
  expect(button).not.toBeInTheDocument();
});

test("if date passed in, show date", () => {
  const component = render(<MoodInput date={new Date()} />);
  const date = component.queryByTestId("dayOfWeekText");
  expect(date).toBeInTheDocument();
});

test("if no date passed in, don't show date", () => {
  const component = render(<MoodInput />);
  const date = component.queryByTestId("dayOfWeekText");
  expect(date).not.toBeInTheDocument();
});
