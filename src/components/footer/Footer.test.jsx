import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer.jsx";
import { describe, it, expect } from "vitest";

describe("Footer", () => {
    it("should render the hotel name", () => {
        render(<Footer />);
        const hotelName = screen.getByText(/Hotel Johnnie Walker/i);
        expect(hotelName).toBeInTheDocument();
    });
    it("shpould render the correct year", () => {
        const currentYear = new Date().getFullYear();
        render(<Footer />);
        const yearElement = screen.getByText(new RegExp(currentYear.toString(), 'i'));
        expect(yearElement).toBeInTheDocument();
    });
    it("should render the github logo", () => {
        render(<Footer />);
        const logoElement = screen.getByAltText(/Github logo/i);
        expect(logoElement).toBeInTheDocument();
    });
});
