import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Styles from "./styles/global.js";
import { Content } from "./styles/mainComponents.js";

import { store, persistor } from "./store";
import Header from "./components/header";
import Cover from "./components/banner";
import ActionBar from "./components/ActionBar";
import Profile from "./components/Profile";
import Timeline from "./components/Timeline";
import Suggestion from "./components/Suggestion";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Styles />

        <Header />
        <Cover />
        <ActionBar />
        <Content>
          <Profile />

          <Timeline />
          <Suggestion />
        </Content>
      </PersistGate>
    </Provider>
  );
}

export default App;
