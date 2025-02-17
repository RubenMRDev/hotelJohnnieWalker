import { render, screen } from "@testing-library/react";
import Review from './Review';
import "@testing-library/jest-dom";

describe("Review Component", () => {


    test("Should render the reviewer's name and date correctly", () => {
        render(<Review nombre="John Doe" fecha="January 1, 2024" calificacion={5} texto="Great experience!" />);
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("January 1, 2024")).toBeInTheDocument();
    });

    test("Should display the correct rating stars", () => {
        render(<Review nombre="John Doe" fecha="January 1, 2024" calificacion={4.5} texto="Great experience!" />);
        expect(screen.getByText("★★★★☆")).toBeInTheDocument();
    });

    test("Should render the review text correctly", () => {
        render(<Review nombre="John Doe" fecha="January 1, 2024" calificacion={4} texto="Amazing hotel, loved it!" />);
        expect(screen.getByText("Amazing hotel, loved it!")).toBeInTheDocument();
    });

});

