import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Restaurant from "./Restaurant";

describe("Restaurant", () => {
    test('the "Book" button must be rendered and enabled', () => {
        render(<Restaurant />);
        const buttonReserva = screen.getByText(/Reservar/i);
        expect(buttonReserva).toBeInTheDocument();
        expect(buttonReserva).toBeEnabled(); 
      });

      test('should show hours dropdown when clicking on time field', () => {
        render(<Restaurant />);
        
        const inputHora = screen.getByPlaceholderText(/Seleccione hora/i);
        fireEvent.click(inputHora);
        
        const options = screen.getAllByText(/(08:00|09:00|10:00|14:00|15:00|18:00|19:00|20:00|21:00|22:00)/);
        expect(options.length).toBeGreaterThan(0); 
      });

      test('you should update the comments value correctly', () => {
        render(<Restaurant />);
        
        const inputComentarios = screen.getByPlaceholderText(/Escriba aquí su comentario.../i);
        fireEvent.change(inputComentarios, { target: { value: 'Reserva para una ocasión especial' } });
        
        expect(inputComentarios.value).toBe('Reserva para una ocasión especial');
      });
    
});