import { render, screen, fireEvent } from "@testing-library/react";
import MainRestaurant from "./MainRestaurant";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


describe("MainRestaurant Component", () => {
  test("renders MainRestaurant component correctly", () => {
    render(
      <BrowserRouter>
        <MainRestaurant />
      </BrowserRouter>
    );

    expect(screen.getByText("JOHNNIE WALKER")).toBeInTheDocument();
    expect(screen.getByText("RESTAURANTE")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Reservar/i })).toBeInTheDocument();
  });

  test("button has correct styles and text", () => {
    render(
      <BrowserRouter>
        <MainRestaurant />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: /Reservar/i });
    expect(button).toHaveClass("bg-[#D9B26A]");
    expect(button).toHaveTextContent("Reservar");
  });

  test("button click navigates to the correct URL", () => {
    delete window.location;
    window.location = { href: "" };
    
    render(
      <BrowserRouter>
        <MainRestaurant />
      </BrowserRouter>
    );
    
    const button = screen.getByRole("button", { name: /Reservar/i });
    fireEvent.click(button);
    
    expect(window.location.href).toBe("/reserverestaurant");
  });
});
