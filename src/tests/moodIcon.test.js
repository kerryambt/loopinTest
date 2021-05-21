import React from "react";
import { render } from "@testing-library/react";
import MoodIcon from "../components/common/moodIcon";

test("mood prop is used to set classes", () => {
  const component = render(<MoodIcon mood="happy" />);
  const icon = component.container.firstChild;
  expect(icon).toHaveClass("fa-grin-beam");
});

test("does not render if mood undef", () => {
  const component = render(<MoodIcon mood={undefined} />);
  const icon = component.container.firstChild;
  expect(icon).not.toBeInTheDocument();
});
