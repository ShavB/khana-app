import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("display hello app", async () => {
  render(<App />);
  const item = await screen.getByText("hellp appp");
  expect(item).toBeVisible();
});
