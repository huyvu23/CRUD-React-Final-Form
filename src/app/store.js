import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userSlice from "../Features/userSlice"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const reducer = combineReducers({
  user: userSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

// const store = configureStore({
//   reducer: {
//     user: persistedReducer,
//   },
// })

const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
})

export default store
