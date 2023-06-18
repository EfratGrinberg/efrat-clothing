import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot instead of render
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./store/store";
import { Elements } from "@stripe/react-stripe-js";
import {stripePromise} from './utils/stripe/stripe.utils';
import "./index.scss";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
