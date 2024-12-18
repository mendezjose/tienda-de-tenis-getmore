import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './Navbar.tsx';

createRoot(document.getElementById('navbar')!).render(
  <StrictMode>
    <Navbar />
  </StrictMode>
);
