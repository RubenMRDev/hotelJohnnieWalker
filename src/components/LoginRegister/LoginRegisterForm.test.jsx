import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';  // Importa BrowserRouter
import LoginRegisterForm from './LoginRegisterForm';
import '@testing-library/jest-dom';

describe('LoginRegisterForm', () => {
  
  test('debe renderizar el botón de enviar el formulario', () => {
    render(
      <BrowserRouter>  {/* Asegúrate de envolver con BrowserRouter */}
        <LoginRegisterForm />
      </BrowserRouter>
    );

    // Verifica que el botón de registro está presente
    const registerTab = screen.getByRole('button', { name: /Regístrate/i });

    // Aquí debes usar registerTab, no buttonRegister
    expect(registerTab).toBeInTheDocument();

    // Cambiar a la pestaña de login
    const loginTab = screen.getByRole('button', { name: /Inicia Sesión/i });
    fireEvent.click(loginTab);

    // Verifica que el botón cambia a 'Entrar'
    const buttonLogin = screen.getByRole('button', { name: /Entrar/i });
    expect(buttonLogin).toBeInTheDocument();
  });

  test('debe renderizar la pestaña de login', () => {
    render(
      <BrowserRouter>  {/* Asegúrate de envolver con BrowserRouter */}
        <LoginRegisterForm />
      </BrowserRouter>
    );

    // Verifica que la pestaña de login está presente
    const loginTab = screen.getByRole('button', { name: /Inicia Sesión/i });
    expect(loginTab).toBeInTheDocument();
  });

  test('debe renderizar la pestaña de registro', () => {
    render(
      <BrowserRouter>  {/* Asegúrate de envolver con BrowserRouter */}
        <LoginRegisterForm />
      </BrowserRouter>
    );

    // Verifica que la pestaña de registro está presente
    const registerTab = screen.getByRole('button', { name: /Regístrate/i });
    expect(registerTab).toBeInTheDocument();
  });
});
