import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot instead of render
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from './store/store';

import "./index.scss";

const rootElement = document.getElementById("root");

// Use createRoot instead of render
createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
