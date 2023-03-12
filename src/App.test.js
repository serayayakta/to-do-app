import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders to do app title", () => {
  render(<App />);
  const title = screen.getByText(/to do app/i);
  expect(title).toBeInTheDocument();
});
