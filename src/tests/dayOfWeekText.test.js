import React from "react";
import { render } from "@testing-library/react";
import DayOfWeekText from "../components/common/dayOfWeekText";

test("Initial output should be a day of the week", () => {
  const component = render(<DayOfWeekText />);
  const dayOfWeekText = component.getByTestId("dayOfWeekText");
  expect(dayOfWeekText.textContent).toContain("day");
});

test("Initial output should be Today if data is provided from app", () => {
  const component = render(<DayOfWeekText isToday={true} />);
  const dayOfWeekText = component.getByTestId("dayOfWeekText");
  expect(dayOfWeekText.textContent).toBe("Today");
});

test("Initial output should not be Today if app says it is not today", () => {
  const component = render(<DayOfWeekText isToday={false} />);
  const dayOfWeekText = component.getByTestId("dayOfWeekText");
  expect(dayOfWeekText.textContent).not.toBe("Today");
});
