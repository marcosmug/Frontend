import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Monstat from './statspokemonpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<App/>}/>
      <Route path = "/statspokemonpage" element={<Monstat/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();