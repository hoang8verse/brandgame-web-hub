import logo from './logo.svg';
import './App.css';

import AppRoutes from "./AppRoutes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import { injectStore as injectStoreToApiService } from "./services/api";
injectStoreToApiService(store);

function App() {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
        <AppRoutes />
    </PersistGate>
  </Provider>
  );
}

export default App;
