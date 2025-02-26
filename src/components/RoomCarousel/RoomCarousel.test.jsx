import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RoomCarousel from "./RoomCarousel";
import { describe, it, expect, vi } from "vitest";

vi.mock("react-slick", () => {
    return {
        default: ({ children }) => <div>{children}</div>,
    };
});

describe("RoomCarousel", () => {
    it("debería renderizar el título de la habitación", () => {
        render(<RoomCarousel />);
        const title = screen.getByText(/Habitación estándar con 1 o 2 camas/i);
        expect(title).toBeInTheDocument();
    });

    it("debería renderizar la descripción de la habitación", () => {
        render(<RoomCarousel />);
        const description = screen.getByText(
            /Perfecta para una estancia corta, cama individual, baño privado y ambiente tranquilo./i
        );
        expect(description).toBeInTheDocument();
    });

    it("debería renderizar el selector de camas", () => {
        render(<RoomCarousel />);
        const bedsSelect = screen.getByRole("combobox", {
            name: /Selecciona las camas simples que quieres en la habitación:/i,
        });
        expect(bedsSelect).toBeInTheDocument();
    });

    it("debería renderizar el botón de reserva", () => {
        render(<RoomCarousel />);
        const reserveButton = screen.getByRole("button", {
            name: /Reservar por \$\(€\)/i,
        });
        expect(reserveButton).toBeInTheDocument();
    });

    it("debería renderizar las imágenes de la habitación", () => {
        render(<RoomCarousel />);
        const images = screen.getAllByRole("img");
        expect(images).toHaveLength(3);
    });

    it("debería renderizar tres indicadores de diapositivas con uno activo", () => {
        const { container } = render(<RoomCarousel />);
        const indicatorElements = container.querySelectorAll(
            ".w-3.h-3.rounded-full"
        );
        expect(indicatorElements).toHaveLength(3);
        const activeIndicators = Array.from(indicatorElements).filter((el) =>
            el.classList.contains("bg-gray-700") 
        );
        expect(activeIndicators).toHaveLength(1);
    });
});