import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Urunler from './components/Urunler';
import Sepetim from './components/Sepetim';
import {BrowserRouter,Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/urunler" exact  element={<Urunler/>} />
      <Route path="/urunler/:ara" exact  element={<Urunler/>} />
      <Route path="/sepetim" exact  element={<Sepetim/>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
