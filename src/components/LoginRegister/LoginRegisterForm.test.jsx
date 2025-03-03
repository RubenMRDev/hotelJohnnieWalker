import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import LoginRegisterForm from './LoginRegisterForm';
import '@testing-library/jest-dom';

describe('LoginRegisterForm', () => {
  
  test('debe renderizar el botón de enviar el formulario', () => {
    render(
      <BrowserRouter> 
        <LoginRegisterForm />
      </BrowserRouter>
    );

    const registerTab = screen.getByRole('button', { name: /Regístrate/i });

    expect(registerTab).toBeInTheDocument();

    const loginTab = screen.getByRole('button', { name: /Inicia Sesión/i });
    fireEvent.click(loginTab);

    const buttonLogin = screen.getByRole('button', { name: /Entrar/i });
    expect(buttonLogin).toBeInTheDocument();
  });

  test('debe renderizar la pestaña de login', () => {
    render(
      <BrowserRouter>  
        <LoginRegisterForm />
      </BrowserRouter>
    );

    const loginTab = screen.getByRole('button', { name: /Inicia Sesión/i });
    expect(loginTab).toBeInTheDocument();
  });

  test('debe renderizar la pestaña de registro', () => {
    render(
      <BrowserRouter>  
        <LoginRegisterForm />
      </BrowserRouter>
    );

    const registerTab = screen.getByRole('button', { name: /Regístrate/i });
    expect(registerTab).toBeInTheDocument();
  });
});
