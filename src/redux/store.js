import { combineReducers, configureStore } from "@reduxjs/toolkit";
import savedNews from "./slice/savedNews";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import newsByQuery from "./slice/newsByQuery";
import newsByCountry from "./slice/newsByCountry";

const reducer = combineReducers({
  savedNews: savedNews,
  newsByQuery: newsByQuery,
  newsByCountry: newsByCountry,
});

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["newsByQuery", "newsByCountry"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
