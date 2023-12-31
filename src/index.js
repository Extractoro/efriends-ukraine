import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/efriends-ukraine/">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
