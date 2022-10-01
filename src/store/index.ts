import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./modules/user";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReduce);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export type RootStore = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
