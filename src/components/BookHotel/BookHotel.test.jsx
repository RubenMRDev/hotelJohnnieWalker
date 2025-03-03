import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookHotel from './BookHotel'; 

describe('BookHotel', () => {
  it('muestra el título promocional', () => {
    render(<BookHotel />);
    const title = screen.getByText('Obtén un descuento de hasta un 40%. Ahorra con Johnnie Walker Hotel');
    expect(title).toBeInTheDocument();
  });

  it('renderiza el botón de buscar', () => {
    render(<BookHotel />);
    const searchButton = screen.getByText('Buscar');
    expect(searchButton).toBeInTheDocument();
  });

  it('muestra mensaje de no habitaciones por defecto', () => {
    render(<BookHotel />);
    const noResults = screen.getByText('No hay habitaciones disponibles con los filtros seleccionados.');
    expect(noResults).toBeInTheDocument();
  });
});