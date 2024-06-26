import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProductProvider } from './Context';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <ToastContainer />
        <App />

      </ProductProvider>

    </Router>
  </React.StrictMode>
);