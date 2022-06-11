import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css';
import GifExpertApp from './GifExpertApp';
import reportWebVitals from './reportWebVitals';
import { NextUIProvider } from '@nextui-org/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NextUIProvider>
    <GifExpertApp />
  </NextUIProvider>
);

// reportWebVitals();
