import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faShareNodes, faMessage } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faShareNodes, faMessage);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
