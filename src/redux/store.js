/* import { createStore, combineReducers } from "redux"; */
import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice";
import localeReducer from "./localeSlice";
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
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const balancePersistConfig = {
  key: "balanceValue",
  storage,
  whitelist: ["value"],
};

const localePersistConfig = {
  key: "lang",
  storage,
  whitelist: ["lang"],
};

const pBalanceReducer = persistReducer(balancePersistConfig, balanceReducer);

const pLocaleReducer = persistReducer(localePersistConfig, localeReducer);

export const store = configureStore({
  reducer: {
    balance: pBalanceReducer,
    locale: pLocaleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

/* Витягли з проекту */

/* тут композиція робітників */
/* const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
});
 */
/* export const store = createStore(rootReducer); */
/* ось тут магія */

/* Кроки 
1)Прив`язати store до елементів
2)Create action and send  
3)Обробка action in reducer(через switch case)*/
