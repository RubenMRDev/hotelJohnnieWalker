import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, expect } from "vitest";

describe("Header component", () => {
    test("renders the logo", () => {
        render(<Header />);
        const logo = screen.getByRole("img", {
            name: /logo hotel jhonny walker/i,
        });
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("src", "src/assets/images/logo.png");
    });

    test("renders the call icon", () => {
        const { container } = render(<Header />);
        const callIcon = container.querySelector("svg.call-svg");
        expect(callIcon).toBeInTheDocument();
    });

    test("renders the profile link", () => {
        render(<Header />);
        const links = screen.getAllByRole("link");
        const profileLink = links.find(
            (link) => link.getAttribute("href") === "/profile"
        );
        expect(profileLink).toBeInTheDocument();
        expect(profileLink).toHaveAttribute("href", "/profile");
    });
});
