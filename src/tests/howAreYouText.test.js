import React from "react";
import { render } from "@testing-library/react";
import HowAreYouText from "../components/common/howAreYouText";

test("if today and mood is given, should say 'is'", () => {
  const component = render(<HowAreYouText isToday={true} mood="happy" />);
  const heading = component.getByRole("heading");
  expect(heading.textContent).toContain("is");
});

test("if not today and mood is given, should say 'was'", () => {
  const component = render(<HowAreYouText isToday={false} mood="happy" />);
  const heading = component.getByRole("heading");
  expect(heading.textContent).toContain("was");
});

test("if mood is given, have subtext", () => {
  const component = render(<HowAreYouText isToday={true} mood="happy" />);
  const subText = component.getByTestId("subText");
  expect(subText.textContent).toBe("That's awesome!");
});

test("if mood is not given, have no subtext", () => {
  const component = render(<HowAreYouText isToday={true} mood={undefined} />);
  const subText = component.getByTestId("subText");
  expect(subText.textContent).toBe("");
});
