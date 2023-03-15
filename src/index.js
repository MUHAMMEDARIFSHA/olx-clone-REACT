import React from 'react';
import ReactDOM from 'react-dom/client';
import firebase from './firebase/config'
import './index.css';
import App from './App';

import { FirebaseContext } from './store/Context';
import Context from './store/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <Context>
         <App />
      </Context>
     </FirebaseContext.Provider>
   
  </React.StrictMode>
);


