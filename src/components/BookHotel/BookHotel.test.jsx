import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookHotel from "./BookHotel";
import { describe, it, expect, vi } from "vitest";

describe("BookHotel Component", () => {
	it("renderiza el texto de descuento correctamente", () => {
		render(<BookHotel />);
		const discountText = screen.getByText(
			/Obtén un descuento de hasta un 40%/i
		);
		expect(document.body.contains(discountText)).toBe(true);
	});

	it("renderiza correctamente los inputs del formulario", () => {
		render(<BookHotel />);

		const entradaInput = screen.getByLabelText(/Fecha de entrada/i);
		expect(document.body.contains(entradaInput)).toBe(true);
		expect(entradaInput.getAttribute("type")).toBe("date");

		const salidaInput = screen.getByLabelText(/Fecha de salida/i);
		expect(document.body.contains(salidaInput)).toBe(true);
		expect(salidaInput.getAttribute("type")).toBe("date");

		const personasInput = screen.getByLabelText(/Número de personas/i);
		expect(document.body.contains(personasInput)).toBe(true);
		expect(personasInput.getAttribute("type")).toBe("number");
	});

	it('al hacer click en "Buscar" se ejecuta handleSearchClick', () => {
		const consoleSpy = vi
			.spyOn(console, "log")
			.mockImplementation(() => {});

		render(<BookHotel />);
		const searchButton = screen.getByRole("button", { name: /Buscar/i });
		fireEvent.click(searchButton);
		expect(consoleSpy).toHaveBeenCalledWith("Buscando hotel...");

		consoleSpy.mockRestore();
	});
});
