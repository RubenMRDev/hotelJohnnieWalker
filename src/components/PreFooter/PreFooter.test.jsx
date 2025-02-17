import { render, screen } from "@testing-library/react";
import PreFooter from "./PreFooter";
import "@testing-library/jest-dom";

describe("PreFooter Component", () => {
    test("Should render the title correctly", () => {
        render(<PreFooter />);
        const titleElement = screen.getByText(/JOHNNIE WALKER HOTEL/i);
        expect(titleElement).toBeInTheDocument();
    });

    test("Should contain the terms and conditions links", () => {
        render(<PreFooter />);
        expect(screen.getByText(/Booking conditions/i)).toBeInTheDocument();
        expect(screen.getByText(/Legal notice/i)).toBeInTheDocument();
        expect(screen.getByText(/Usage policy/i)).toBeInTheDocument();
    });

    test("Should render the background image correctly", () => {
        render(<PreFooter />);
        const imageElement = screen.getByAltText("");
        expect(imageElement).toHaveAttribute(
            "src",
            "src\\assets\\images\\pre-footer-gradient-bg.png"
        );
    });
});
