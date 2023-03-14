import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { TopicProvider } from './contexts/TopicContext';
import { UserProvider } from './contexts/UserContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <TopicProvider>
        <App />
      </TopicProvider>
    </UserProvider>
  </BrowserRouter>
);

