import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

test("it should have the correct title", () => {
  render(<App />);
  const text = screen.getByText("Hello!");
  expect(text).toBeInTheDocument();
});
