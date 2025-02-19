import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import LoginRegisterForm from "./LoginRegisterForm";

describe("LoginRegisterForm", () => {

  it("toggles between login and register forms", () => {
    render(<LoginRegisterForm />);
    const toggleButton = screen.getByText(/Regístrate/i);

    fireEvent.click(toggleButton);

    expect(screen.getByText(/Regístrate/i)).toBeInTheDocument();
  });

  it("toggles between login and register forms", () => {
    render(<LoginRegisterForm />);
    const toggleButton = screen.getByText(/Inicia Sesión/i);

    fireEvent.click(toggleButton);

    expect(screen.getByText(/Inicia Sesión/i)).toBeInTheDocument();
  });
  test("Show the default login form.", () => {
    render(<LoginRegisterForm />);
    expect(screen.getByText("Inicia Sesión")).toBeInTheDocument();
  });
});
