import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "balance",
  initialState: {
    value: 0,
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = slice.actions;

export default slice.reducer;

//export const deposit = createAction("balance/deposit");

//export const withdraw = createAction("balance/withdraw");

//export const balanceReducer = createReducer({ value: 0 }, (builder) => {
//  builder
//    .addCase(deposit, (state, action) => {
//      state.value += action.payload; /* точна копія, мона мутувати */
//    })
//    .addCase(withdraw, (state, action) => {
//      state.value -= action.payload; /* точна копія, мона мутувати */
//    });
//});

/* другий аргумент (value)=>{return {
  payload:{
  x:value,
  }

  =====а також це місце шоб додати id====
}} */

/* це action  */
/* export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payload: value,
  };
}; */

/* export const withdraw = (value) => {
  return {
    type: "balance/withdraw",
    payload: value,
  };
}; */

/* .addCase(withdraw  == воно сразу вертає рядок */

/* окремий робочий для баланса */
/* export const balanceReducer1 = (state = { value: 0 }, action) => {
  console.log("BalanceReducer", action);
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "balance/withdraw":
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
}; */
