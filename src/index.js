import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import App from "./App"
import store from "./app/store"
import "./index.css"

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
