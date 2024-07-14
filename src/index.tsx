import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Header from './Header';
import Footer from './Footer';
import Partners from './Partners';
import Reasons from './Reasons';
import Mobile from "./Mobile";
import World from "./World";




const header = ReactDOM.createRoot(
    document.getElementById('header') as HTMLElement
);
header.render(
    <Header />
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Partners />
    <Reasons />
    <Mobile />
    <World />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(
    document.getElementById('footer') as HTMLElement
);
footer.render(
    <Footer />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
