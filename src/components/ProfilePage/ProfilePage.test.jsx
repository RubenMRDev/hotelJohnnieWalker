import { render, screen } from '@testing-library/react';
import ProfilePage from './ProfilePage';
import { vi } from 'vitest';
import '@testing-library/jest-dom';


global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]), 
  })
);

describe('ProfilePage', () => {
  it('debería renderizar la información del usuario desde localStorage', () => {
    const mockUserData = {
      name: 'Juan Pérez',
      email: 'juan@example.com',
      phone: '123456789',
      id: 1,
    };
    localStorage.setItem('userData', JSON.stringify(mockUserData));

    render(<ProfilePage />);

    expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    expect(screen.getByText('juan@example.com')).toBeInTheDocument();
    expect(screen.getByText('123456789')).toBeInTheDocument();
  });

  it('debería mostrar el mensaje cuando no hay reservas de hotel', () => {
    render(<ProfilePage />);

    expect(screen.getByText('No tienes reservas de hotel aún.')).toBeInTheDocument();
  });

  it('debería mostrar el mensaje cuando no hay reservas de restaurante', () => {
    render(<ProfilePage />);

    expect(screen.getByText('No tienes reservas de restaurante aún.')).toBeInTheDocument();
  });
});
