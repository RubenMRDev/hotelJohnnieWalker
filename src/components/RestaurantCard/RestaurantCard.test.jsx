import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RestaurantCard from './RestaurantCard.jsx';
import Swal from 'sweetalert2';
import { expect } from 'chai';
import sinon from 'sinon';

describe('RestaurantCard Component', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Renderiza el componente con la imagen inicial correcta', () => {
    render(<RestaurantCard />);
    const image = screen.getByAltText("Nuevo Restaurante");
    expect(image).to.exist;
    expect(image.src).to.include("restaurant2_iohn5l.webp");
  });

  it('Cambia la imagen al hacer click en el botón de siguiente (next)', async () => {
    render(<RestaurantCard />);
    const image = screen.getByAltText("Nuevo Restaurante");
    expect(image.src).to.include("restaurant2_iohn5l.webp");

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[1];
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByAltText("Nuevo Restaurante").src).to.include("restaurant-6479818_skdtym.jpg");
    });
  });

  it('Muestra modal de Carta al hacer click en el botón "Carta"', async () => {
    const swalSpy = sinon.stub(Swal, "fire").resolves();
    render(<RestaurantCard />);
    const cartaButton = screen.getByText("Carta");
    fireEvent.click(cartaButton);

    await waitFor(() => {
      expect(swalSpy.calledWithMatch({
        title: sinon.match(/¡Disfruta de nuestra deliciosa carta!/),
        text: "Descubre nuestros platos exclusivos y disfruta de una experiencia única.",
        imageUrl: "https://res.cloudinary.com/dd5hetwb8/image/upload/menu_mh0axr.jpg",
      })).to.be.true;
    });
  });
});
