import { render, screen } from "@testing-library/react";
import PreFooter from "./PreFooter";
import "@testing-library/jest-dom";

describe("PreFooter Component", () => {
  test("renders PreFooter component correctly", () => {
    render(<PreFooter />);

    expect(screen.getByText("JOHNNIE WALKER")).toBeInTheDocument();
    expect(screen.getByText("HOTEL")).toBeInTheDocument();
  });

  test("has correct background image", () => {
    render(<PreFooter />);
    
    const preFooterDiv = screen.getByRole("banner");
    expect(preFooterDiv).toHaveStyle(
      `background-image: url("https://res.cloudinary.com/dd5hetwb8/image/upload/v1739955280/pre-footer-bg_da5lam.png")`
    );
  });

  test("has correct text styles", () => {
    render(<PreFooter />);
  
    const title = screen.getByTestId("prefooter-title");
  
    expect(title).toHaveStyle("text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.8)");
  });
  
});
