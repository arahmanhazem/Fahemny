import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
//el file dah awel haga bet run lama beneftah el site it starts react and puts the app on the page
//basically starts the app

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
//BrowserRouter dah turns on page switching L the whole app
//createRoottells React to draw the app in a box
//StrictMode dah helper bey warn you aala mistakes while you develop  Users mesh beyshofo