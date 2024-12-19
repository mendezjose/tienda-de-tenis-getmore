import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Hero from './Hero.tsx';

createRoot(document.getElementById('hero')!).render(
  <StrictMode>
    <Hero />
  </StrictMode>
);
