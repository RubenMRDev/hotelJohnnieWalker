import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('Muestra el contenedor principal del footer', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo'); 
    expect(footer).not.toBeNull();
  });

  test('Muestra el texto con el nombre del hotel y el año', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const hotelText = screen.getByText(`© ${currentYear} Hotel Johnnie Walker`);
    expect(hotelText).not.toBeNull();
  });

  test('Muestra el enlace al repositorio de GitHub', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link');
    expect(githubLink).not.toBeNull();
  });
});