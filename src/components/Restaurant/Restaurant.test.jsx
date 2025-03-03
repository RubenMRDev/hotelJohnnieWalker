import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RestaurantReservation from './Restaurant.jsx';
import Swal from 'sweetalert2';
import { expect } from 'chai';
import sinon from 'sinon';

describe('RestaurantReservation Component', () => {

  afterEach(() => {
    sinon.restore();
  });

  it('Renderiza el componente con los valores iniciales correctos', () => {
    render(<RestaurantReservation />);
    
    const titleElement = screen.getByText("Reserva Restaurante");
    expect(titleElement).to.exist;
    
    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons[0].value).to.equal("2");
  });

  it('Muestra el dropdown de horas al hacer click en el input de hora', () => {
    render(<RestaurantReservation />);
    
    const timeInput = screen.getByPlaceholderText("Seleccione hora");
    fireEvent.click(timeInput);
    
    const option = screen.getByText("08:00");
    expect(option).to.exist;
  });

  it('Muestra advertencia cuando no hay usuario logueado al intentar reservar', async () => {
    localStorage.removeItem("userData");

    const swalSpy = sinon.stub(Swal, "fire").resolves();
    
    render(<RestaurantReservation />);
    const reserveButton = screen.getByRole("button", { name: /reservar/i });
    fireEvent.click(reserveButton);

    await waitFor(() => {
      expect(swalSpy.calledWithMatch({
        title: "¡Atención!",
        text: "No hay usuario logueado. La reserva se ha guardado localmente pero no se enviará ninguna confirmación por correo.",
        icon: "warning",
        confirmButtonColor: "#D9B26A",
      })).to.be.true;
    });
  });
});
