import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UsersContextProvider } from './context/UsersContext';
import { AuthContextProvider } from './context/AuthContext';
import { ListsContextProvider } from './context/ListsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ListsContextProvider>
        <UsersContextProvider>
          <App />
        </UsersContextProvider>
      </ListsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
