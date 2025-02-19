import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import MainRestaurant from "./MainRestaurant";

describe('MainRestaurant', () => {
    it('should render the main title', () => {
        render(<MainRestaurant />);
        const mainTitle = screen.getByText(/JOHNNIE WALKER/i);
        expect(mainTitle).toBeInTheDocument();
    });

    it('should render the subtitle', () => {
        render(<MainRestaurant />);
        const subTitle = screen.getByText(/RESTAURANTE/i);
        expect(subTitle).toBeInTheDocument();
    });

    it('should render the reservation button', () => {
        render(<MainRestaurant />);
        const button = screen.getByRole('button', { name: /Reservar/i });
        expect(button).toBeInTheDocument();
    });
});