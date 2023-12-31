import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReduxProvider from './store/redux-provider';
import { Providers } from './views/Providers';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
console.log('here')
root.render(
  // <React.StrictMode>
    <ReduxProvider>
      <Providers/>
    </ReduxProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
