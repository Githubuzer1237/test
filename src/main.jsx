import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { PreLoaderProvider } from './Context/PreLoaderContext.jsx';
import { UserProvider } from './Context/UserContext.jsx';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth'; 
import React, { useState, useEffect, useRef, createContext } from 'react';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCsMmEXWG6BTC3_TQWU1kgb7r8u_FMhZuQ",
  authDomain: "chat-react-b9388.firebaseapp.com",
  projectId: "chat-react-b9388",
  storageBucket: "chat-react-b9388.appspot.com",
  messagingSenderId: "1034338732929",
  appId: "1:1034338732929:web:9006debbf254ec129b3680",
  measurementId: "G-ZVJ7T18931",
};

const app = firebase.initializeApp(firebaseConfig);
export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();


createRoot(document.getElementById('root')).render( 
  <PreLoaderProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
        <Navbar />
        <AppRoute />
      </BrowserRouter>
    </UserProvider>
  </PreLoaderProvider>
)
