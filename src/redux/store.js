import { createStore, combineReducers } from "redux";
import { balanceReducer } from "./balanceSlice";
import { localeReducer } from "./localeSlice";
/* Витягли з проекту */



/* тут композиція робітників */
const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
});

export const store = createStore(rootReducer);
/* ось тут магія */



/* Кроки 
1)Прив`язати store до елементів
2)Create action and send  
3)Обробка action in reducer(через switch case)*/
