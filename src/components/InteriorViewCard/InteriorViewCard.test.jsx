import React from 'react';
import { render, screen } from '@testing-library/react';
import InteriorViewCard from './InteriorViewCard';

describe('InteriorViewCard Component', () => {
  test('Muestra el encabezado "Vistas de interior"', () => {
    render(<InteriorViewCard />);
    const heading = screen.getByText('Vistas de interior');
    expect(heading).not.toBeNull();
  });

  test('Muestra la imagen inicial', () => {
    render(<InteriorViewCard />);
    const img = screen.getByRole('img');
    expect(img).not.toBeNull();
  });

  test('Muestra los botones de navegación', () => {
    render(<InteriorViewCard />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2); 
    expect(buttons[0]).not.toBeNull();
    expect(buttons[1]).not.toBeNull();
  });
});