import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RestaurantReservationCard from './RestaurantReservationCard.jsx';
import { expect } from 'chai';
import sinon from 'sinon';

describe('RestaurantReservationCard Component', () => {
  const defaultProps = {
    adults: 2,
    children: 1,
    date: '03/03/2025',
    time: '19:00',
    comments: 'Comentario de prueba',
    onCancel: () => {},
  };

  it('Renderiza correctamente la tarjeta con la información de la reserva', () => {
    render(<RestaurantReservationCard {...defaultProps} />);
    
    expect(screen.getByText("Restaurante")).to.exist;
    
    expect(screen.getByText(/Fecha:/)).to.exist;
    expect(screen.getByText('03/03/2025')).to.exist;
    expect(screen.getByText(/Hora:/)).to.exist;
    expect(screen.getByText('19:00')).to.exist;
    expect(screen.getByText(/Adultos:/)).to.exist;
    expect(screen.getByText('2')).to.exist;
    expect(screen.getByText(/Niños:/)).to.exist;
    expect(screen.getByText('1')).to.exist;
    
    const image = screen.getByAltText("Reservación de Restaurante");
    expect(image).to.exist;
    expect(image.src).to.include("https://res.cloudinary.com/dd5hetwb8/image/upload/v1740388764/6d675de2-b8a5-40ff-94a0-9ac191e374b8.png");
  });

  it('Llama a la función onCancel cuando se hace clic en el botón "Cancelar"', () => {
    const onCancelSpy = sinon.spy();
    render(<RestaurantReservationCard {...defaultProps} onCancel={onCancelSpy} />);
    
    const cancelButton = screen.getByText("Cancelar");
    fireEvent.click(cancelButton);
    
    expect(onCancelSpy.calledOnce).to.be.true;
  });

  it('El contenedor principal tiene las clases CSS correctas', () => {
    const { container } = render(<RestaurantReservationCard {...defaultProps} />);
    expect(container.firstChild.className).to.include("bg-gray-100");
  });
});
