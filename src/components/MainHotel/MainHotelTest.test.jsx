import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import MainHotel from "./MainHotel";
import { BrowserRouter } from "react-router-dom";

describe("MainHotel Component", () => {
  test("renders MainHotel component correctly", () => {
    render(
      <BrowserRouter>
        <MainHotel />
      </BrowserRouter>
    );

    expect(screen.getByText("JOHNNIE WALKER")).toBeInTheDocument();
    expect(screen.getByText("HOTEL")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Reservar/i })).toBeInTheDocument();
  });

  test("button has correct styles and text", () => {
    render(
      <BrowserRouter>
        <MainHotel />
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
        <MainHotel />
      </BrowserRouter>
    );
    
    const button = screen.getByRole("button", { name: /Reservar/i });
    fireEvent.click(button);
    
    expect(window.location.href).toBe("/reservehotel");
  });
});
