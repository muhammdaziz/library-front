import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./router";
import './index.css';
import {Slide, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router/>
      <ToastContainer transition={Slide}/>
  </React.StrictMode>
);
