import React from 'react';
import { render, screen, fireEvent, act, within } from '@testing-library/react';
import RoomCarousel from './RoomCarousel.jsx';
import { expect } from 'chai';
import sinon from 'sinon';

describe('RoomCarousel Component', () => {
  const sampleRoom = {
    type: "Suite Deluxe",
    description: "Una habitación de lujo con vistas al mar",
    price: 150,
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg"
    ]
  };

  it('No renderiza nada si no se proporciona room', () => {
    const { container } = render(<RoomCarousel room={null} onReserve={() => {}} />);
    expect(container.innerHTML).to.equal("");
  });

  it('Renderiza correctamente la información de la habitación y maneja la reserva', () => {
    const onReserveSpy = sinon.spy();
    const { container } = render(<RoomCarousel room={sampleRoom} onReserve={onReserveSpy} />);
    
    expect(screen.getByText(sampleRoom.type)).to.exist;
    
    expect(screen.getByText(sampleRoom.description)).to.exist;
    
    const reserveButton = screen.getByRole('button', { name: `Reservar por ${sampleRoom.price}€` });
    expect(reserveButton).to.exist;
    
    const activeSlide = container.querySelector('.slick-slide.slick-active[aria-hidden="false"]');
    expect(activeSlide).to.exist;
    
    const { getByAltText } = within(activeSlide);
    const image1 = getByAltText(`${sampleRoom.type} 1`);
    expect(image1).to.exist;
    expect(image1.src).to.include("https://example.com/image1.jpg");
    
    fireEvent.click(reserveButton);
    expect(onReserveSpy.calledOnce).to.be.true;
    expect(onReserveSpy.calledWith(sampleRoom)).to.be.true;
  });

  it('Muestra u oculta las flechas de navegación según el ancho de la ventana', () => {
    act(() => {
      window.innerWidth = 800;
      window.dispatchEvent(new Event("resize"));
    });
    let { container, unmount } = render(<RoomCarousel room={sampleRoom} onReserve={() => {}} />);
    expect(container.querySelector('.slick-prev')).to.exist;
    expect(container.querySelector('.slick-next')).to.exist;
    unmount();

    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event("resize"));
    });
    ({ container } = render(<RoomCarousel room={sampleRoom} onReserve={() => {}} />));
    expect(container.querySelector('.slick-prev')).to.be.null;
    expect(container.querySelector('.slick-next')).to.be.null;
  });
});
