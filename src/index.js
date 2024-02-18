import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Pixabay from './components/Pixabay';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <>
   <App />
   <Pixabay/>
   </>
  
  </React.StrictMode>
);

