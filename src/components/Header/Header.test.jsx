import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header'; 

describe('Header Component', () => {
  test('Muestra el contenedor principal del header', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).not.toBeNull();
  });

  test('Muestra la imagen del logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('logo hotel Jhonny Walker');
    expect(logo).not.toBeNull();
  });

  test('Muestra el enlace del ícono de perfil', () => {
    render(<Header />);
    const profileLink = screen.getByRole('link', { name: '' });
    expect(profileLink).not.toBeNull();
  });
});