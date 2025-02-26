import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "./RestaurantCard";
import { describe, it, expect } from "vitest";

describe("RestaurantCard", () => {
  it("debería renderizar los botones", () => {
    render(<RestaurantCard />);
    const botonHorario = screen.getByText(/HORARIO/i);
    const botonDisponibilidad = screen.getByText(/VER DISPONIBILIDAD/i);
    const botonCarta = screen.getByText(/CARTA/i);

    expect(botonHorario).toBeInTheDocument();
    expect(botonDisponibilidad).toBeInTheDocument();
    expect(botonCarta).toBeInTheDocument();
  });

  it("debería renderizar el texto 'Nuevo Restaurante'", () => {
    render(<RestaurantCard />);
    const titulo = screen.getByText(/Nuevo Restaurante/i);
    expect(titulo).toBeInTheDocument();
  });

  it("debería renderizar las flechas de navegación", () => {
    render(<RestaurantCard />);
    const botones = screen.getAllByRole("button");

    const flechaIzquierda = botones[0];
    const flechaDerecha = botones[1];

    expect(flechaIzquierda).toBeInTheDocument();
    expect(flechaDerecha).toBeInTheDocument();
  });
});
