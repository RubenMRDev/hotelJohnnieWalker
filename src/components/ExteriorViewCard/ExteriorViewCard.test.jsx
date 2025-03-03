import React from 'react';
import { render, screen } from '@testing-library/react';
import ExteriorViewCard from './ExteriorViewCard';

describe('ExteriorViewCard Component', () => {
  test('Muestra el encabezado "Vistas de exterior"', () => {
    render(<ExteriorViewCard />);
    const heading = screen.getByText('Vistas de exterior');
    expect(heading).not.toBeNull();
  });

  test('Muestra la imagen inicial', () => {
    render(<ExteriorViewCard />);
    const img = screen.getByRole('img');
    expect(img).not.toBeNull();
  });

  test('Muestra los botones "Previous" y "Next"', () => {
    render(<ExteriorViewCard />);
    const prevButton = screen.getByLabelText('Previous');
    const nextButton = screen.getByLabelText('Next');
    expect(prevButton).not.toBeNull();
    expect(nextButton).not.toBeNull();
  });
});