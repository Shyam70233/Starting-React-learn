import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import C1 from './C1';

// import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <C1 />
  </StrictMode>
);
