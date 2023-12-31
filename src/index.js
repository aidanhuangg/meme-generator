import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Body from './components/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body/>
    <Footer/>
  </React.StrictMode>
);

