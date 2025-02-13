import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { describe, it, expect } from "vitest";

describe("Footer", () => {
    it("should render the hotel name", () => {
        render(<Footer />);
        const hotelName = screen.getByText(/Hotel Johnnie Walker/i);
        expect(hotelName).toBeInTheDocument();
    });
});
