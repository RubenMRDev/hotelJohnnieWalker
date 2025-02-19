import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import MainHotel from "./MainHotel";

describe('MainHotel', () => {
    it('should render the main title', () => {
        render(<MainHotel />);
        const mainTitle = screen.getByText(/JOHNNIE WALKER/i);
        expect(mainTitle).toBeInTheDocument();
    });

    it('should render the subtitle', () => {
        render(<MainHotel />);
        const subTitle = screen.getByText(/HOTEL/i);
        expect(subTitle).toBeInTheDocument();
    });

    it('should render the reservation button', () => {
        render(<MainHotel />);
        const button = screen.getByRole('button', { name: /Reservar/i });
        expect(button).toBeInTheDocument();
    });
});