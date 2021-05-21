import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SubmitButton from "../components/common/submitButton";
import App from "../App";
import MoodInput from "../components/moodInput";

test("label prop is rendered as button text", () => {
  const component = render(<SubmitButton label="testLabel" />);
  const button = component.getByRole("button");
  expect(button.textContent).toBe("testLabel");
});

test("disabled prop true = button disabled", () => {
  const component = render(<SubmitButton disabled={true} />);
  const button = component.getByRole("button");
  expect(button).toBeDisabled();
});

test("disabled prop false = button enabled", () => {
  const component = render(<SubmitButton disabled={false} />);
  const button = component.getByRole("button");
  expect(button).toBeEnabled();
});

test("submit button submits current mood", async () => {
  const component = render(
    <App>
      <MoodInput>
        <SubmitButton />
      </MoodInput>
    </App>
  );
  const moodButton = component.getByText("Happy");
  fireEvent.click(moodButton);

  const submitButton = await component.getByText("Submit your mood");
  fireEvent.click(submitButton);

  expect(component.getByText("Edit your mood")).toBeInTheDocument();
});
