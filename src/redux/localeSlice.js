/* Створили action for lang*/
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "local",
  initialState: {
    lang: "uk",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    prepare: (value) => {
      return {
        payload: {
          id: crypto.randomUUID(),
          x: value,
        },
      };
    },
  },
});

export const { changeLang } = slice.actions;

export default slice.reducer;

/* export const changeLang = (newLang) => {
  return {
    type: "locale/changeLang",
    payload: newLang,
  };
}; */

/* окремий робочий для locale */
/* export const localeReducer = (state = { lang: "uk" }, action) => {
  console.log("LocaleReducer", action);
  switch (action.type) {
    case "locale/changeLang":
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
}; */
