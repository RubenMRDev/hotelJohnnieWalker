import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Router } from './router/Router.jsx';
import Header from './components/Header/Header.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
