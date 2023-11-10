import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App';
import ContextProvider from 'src/components/ContextProvider';
import 'src/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);
