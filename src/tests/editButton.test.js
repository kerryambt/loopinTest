import React from "react";
import { fireEvent, getByText, render, cleanup } from "@testing-library/react";
import EditButton from "../components/common/editButton";
import App from "../App";
import MoodInput from "../components/moodInput";

afterEach(cleanup);

test("edit function removes mood for current day", async () => {
  const component = render(
    <App>
      <MoodInput>
        <EditButton />
      </MoodInput>
    </App>
  );
  const moodButton = component.getByText("Happy");
  fireEvent.click(moodButton);

  const submitButton = await component.getByText("Submit your mood");
  fireEvent.click(submitButton);

  const button = await component.findByTestId("editButton");
  fireEvent.click(button);

  expect(component.getByText("Please select your mood")).toBeInTheDocument();
});
