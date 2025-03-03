import React from 'react';
import { render, screen, fireEvent, act, within } from '@testing-library/react';
import ResenyasCarousel from './Review.jsx';
import { expect } from 'chai';

describe('ResenyasCarousel Component', () => {
  it('Muestra mensaje cuando no hay reseñas disponibles', () => {
    render(<ResenyasCarousel resenyas={[]} />);
    expect(screen.getByText("No hay reseñas disponibles.")).to.exist;
  });

  it('Renderiza correctamente la información de una reseña en la diapositiva activa', () => {
    const sampleReviews = [
      {
        name: "Juan Perez",
        date: "01/01/2025",
        rating: 4.5,
        text: "Muy bueno!"
      }
    ];
    const { container } = render(<ResenyasCarousel resenyas={sampleReviews} />);
    
    const activeSlide = container.querySelector('.slick-active');
    expect(activeSlide).to.exist;
    
    const activeWithin = within(activeSlide);
    expect(activeWithin.getByText("Juan Perez")).to.exist;
    expect(activeWithin.getByText("01/01/2025")).to.exist;
    expect(activeWithin.getByText("Muy bueno!")).to.exist;
    
    expect(activeWithin.getByText(/★★★★☆/)).to.exist;
  });

  it('Muestra u oculta las flechas de navegación según el ancho de la ventana', () => {
    const sampleReviews = [
      {
        name: "Juan Perez",
        date: "01/01/2025",
        rating: 4,
        text: "Excelente!"
      }
    ];

    act(() => {
      window.innerWidth = 800;
      window.dispatchEvent(new Event("resize"));
    });
    const { unmount } = render(<ResenyasCarousel resenyas={sampleReviews} />);
    expect(screen.getByText("◀")).to.exist;
    expect(screen.getByText("▶")).to.exist;
    unmount();

    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event("resize"));
    });
    render(<ResenyasCarousel resenyas={sampleReviews} />);
    expect(screen.queryByText("◀")).to.be.null;
    expect(screen.queryByText("▶")).to.be.null;
  });
});
