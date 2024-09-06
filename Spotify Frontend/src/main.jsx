import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';
import PlayerContextProvider from './context/PlayerContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <PlayerContextProvider>
        <App/>
      </PlayerContextProvider>
    </HashRouter>
  </React.StrictMode>,
);