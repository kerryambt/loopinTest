import React from "react";
import { fireEvent, render } from "@testing-library/react";
import DateSelector from "../components/common/dateSelector";
import App from "../App";
import MoodInput from "../components/moodInput";

test("A date is output, so text should include the word day", () => {
  const component = render(<DateSelector />);
  const root = component.container.firstChild;
  expect(root.textContent).toContain("day");
});

test("If it is today, date cannot be increased", () => {
  const component = render(<DateSelector isToday={true} />);
  const buttonRight = component.getByTestId("buttonRight");
  expect(buttonRight).toBeDisabled();
});

test("date can always be decreased", () => {
  const component = render(<DateSelector />);
  const buttonLeft = component.getByTestId("buttonLeft");
  expect(buttonLeft).not.toBeDisabled();
});

test("button click changes date both ways", () => {
  const component = render(
    <App>
      <MoodInput>
        <DateSelector />
      </MoodInput>
    </App>
  );
  const buttonLeft = component.getByTestId("buttonLeft");
  const buttonRight = component.getByTestId("buttonRight");
  const dateSelector = component.getByTestId("dateSelector");
  let initialText = dateSelector.textContent;

  fireEvent.click(buttonLeft);
  expect(dateSelector.textContent).not.toBe(initialText);
  initialText = dateSelector.textContent;

  fireEvent.click(buttonRight);
  expect(dateSelector.textContent).not.toBe(initialText);
});
