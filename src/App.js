import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Styles from "./styles/global.js";
import Routes from "./routes";
import { store, persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Styles />

        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
