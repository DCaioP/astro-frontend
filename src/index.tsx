import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa de 'react-dom/client' em React 18
import './index.css';
import App from './App';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

