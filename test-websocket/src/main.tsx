// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './AppLayout';
import { Toaster } from 'sonner';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppLayout />
    <Toaster richColors position="top-right" />
  </React.StrictMode>
);
