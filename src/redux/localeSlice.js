/* Створили action for lang*/

export const changeLang = (newLang) => {
  return {
    type: "locale/changeLang",
    payload: newLang,
  };
};

/* окремий робочий для locale */
export const localeReducer = (state = { lang: "uk" }, action) => {
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
};