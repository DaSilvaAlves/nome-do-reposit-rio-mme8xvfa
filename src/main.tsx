import React from 'react';
import from 'react-dom/client';
import App from './App';
import './styles/theme.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);