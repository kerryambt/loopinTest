import React from "react";
import { fireEvent, render } from "@testing-library/react";
import MoodButton from "../components/common/moodButton";
import App from "../App";
import MoodInput from "../components/moodInput";

test("label prop is rendered as button text", () => {
  const component = render(
    <MoodButton
      label="testLabel"
      getMoodColour={() => {
        return "primary";
      }}
    />
  );
  const button = component.getByRole("button");
  expect(button.textContent).toBe("testLabel");
});

test("colour prop is used to set classes", () => {
  const component = render(
    <MoodButton
      label="testLabel"
      getMoodColour={() => {
        return "primary";
      }}
    />
  );
  const button = component.getByRole("button");
  expect(button).toHaveClass("btn-primary");
});

test("non selected button has outline class", () => {
  const component = render(
    <MoodButton
      label="testLabel"
      mood="happy"
      newMood="sad"
      getMoodColour={() => {
        return "primary";
      }}
    />
  );
  const button = component.getByRole("button");
  expect(button).toHaveClass("btn-outline-primary");
});

test("selected button has no outline class", () => {
  const component = render(
    <MoodButton
      label="testLabel"
      mood="happy"
      newMood="happy"
      getMoodColour={() => {
        return "primary";
      }}
    />
  );
  const button = component.getByRole("button");
  expect(button).not.toHaveClass("btn-outline-primary");
});

test("mood button sets current mood to be submit", () => {
  const component = render(
    <App>
      <MoodInput>
        <MoodButton />
      </MoodInput>
    </App>
  );
  const moodButton = component.getByText("Happy");
  fireEvent.click(moodButton);

  expect(component.getByText("Submit your mood")).toBeInTheDocument();
});
