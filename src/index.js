import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { Grommet } from 'grommet';
import styled from 'styled-components';
import theme from './theme'
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyBuOOojJIwC_wjhCWQX4ZhoHRJ7QU5-Pjg",
  authDomain: "abfe-5cd3a.firebaseapp.com",
  projectId: "abfe-5cd3a",
  storageBucket: "abfe-5cd3a.appspot.com",
  messagingSenderId: "252087285346",
  appId: "1:252087285346:web:cb2fca422446216ece833b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const StyledGrommet = styled(Grommet)`
  height: 100%;
  width: 100%;
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledGrommet theme={theme}>
        <App />
      </StyledGrommet>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
