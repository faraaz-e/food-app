import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component Test cases", () => {
  // beforeAll(() => {
  //   console.log("Runs Before All Test cases");
  // });

  // beforeEach(() => {
  //   console.log("Runs Before Each Test cases");
  // });

  // afterAll(() => {
  //   console.log("Runs After all Test cases");
  // });

  // afterEach(() => {
  //   console.log("Runs After Each Test cases");
  // });

  test("Testing: Load Contact Component", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Testing: Should load button inside Contact component", () => {
    render(<Contact />);

    // Querying
    const button = screen.getByRole("button");
    //   const button = screen.getByText("Submit"); //alternate method to test

    // Assertion
    expect(button).toBeInTheDocument();
  });

  // "test" and "it" are same
  it("Testing: Should load 2 input boxes inside Contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox"); // using 'All' keyword for multiple items

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
