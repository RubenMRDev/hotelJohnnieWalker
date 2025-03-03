import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Landing from './Landing';

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Landing Component', () => {
  test('Muestra el título "JOHNNIE WALKER HOTEL"', () => {
    renderWithRouter(<Landing />);
    const titlePart1 = screen.getByText('JOHNNIE WALKER');
    const titlePart2 = screen.getByText('HOTEL');
    expect(titlePart1).not.toBeNull();
    expect(titlePart2).not.toBeNull();
  });

  test('Muestra el botón "Empezar"', () => {
    renderWithRouter(<Landing />);
    const startButton = screen.getByText('Empezar');
    expect(startButton).not.toBeNull();
  });

  test('Muestra los textos descriptivos de la cuadrícula', () => {
    renderWithRouter(<Landing />);
    const secureBooking = screen.getByText('Reserva 100% segura');
    const noFees = screen.getByText('Sin gastos de gestión');
    const directPayment = screen.getByText('Pago directo en el hotel');
    expect(secureBooking).not.toBeNull();
    expect(noFees).not.toBeNull();
    expect(directPayment).not.toBeNull();
  });
});